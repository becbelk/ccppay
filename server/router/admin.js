const User = require('../model/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
/**
 * get Register
 */
exports.register = async (req, res) => {
  try {
    console.log('register==>')
    res.render('register', { title: 'register' })
  } catch (e) {
    console.log('[register] ', e)
  }
}
/**
 * post signIN
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('sign in ...')

    const user = await User.findOne({ username });
    console.log('user=', user)
    if (!user) {
      console.log('Invalid credentials')
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('isPasswordValid : ', isPasswordValid)

    if (!isPasswordValid) {
      console.log('Invalid credentials password false')
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/home')

  } catch (error) {
    console.log(error);
  }
}
/**
 * get signIn
 */
exports.signInForm = (req, res) => {
  try {
    res.render("signin-form", { title: "دخول" })
  } catch (e) {
    res.status(505).json({ "error": e })
  }
}


/**
 * get register
 * @param {*} req 
 * @param {*} res 
 */
exports.createUser = async (req, res, next) => {
  try {
    const { username, password, confirmPassword, codeCompany, ccp, amount, postalTax, } = req.body;
    console.log(username, password, confirmPassword)
    if (password === confirmPassword) {
      let hashedPassword = await bcrypt.hash(password, 10)
      console.log('hashedPassword', hashedPassword)
      const result = await User.create({
        username, password: hashedPassword,
        codeCompany, ccp, amount, postalTax,
      });
      console.log('result=',result)
      const token = jwt.sign({ userId: result._id }, process.env.JWT_SECRET);
      res.cookie('token', token, { httpOnly: true });
res.redirect('/register-success')

    }
    else {
      console.log('[register] :', error);
      res.redirect('/register-failure')
    }

  } catch (error) {
    console.log('[register] :', error)

    res.render('register-error', { title: 'unexpected' })
  }


}

exports.success=(req, res)=>{res.render('register-success',{title:'success'})}
exports.failure=(req, res)=>{res.render('register-failure',{title:'failure'})
}