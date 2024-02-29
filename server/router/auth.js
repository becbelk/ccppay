const jwt = require('jsonwebtoken');
exports.authenticate=async (req, res, next ) => {
    const token = req.cookies.token;
  
    if(!token) {
    return   res.redirect('/signIn')
  
    }
  
    try {
      console.log('[authenticate]',token)
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('[authenticate] : json verified....')
      req.userId = decoded.userId;
      next();
    } catch(error) {
      res.status(401).json( { "message": "Unauthorized"} );
    }
  }
  //exports.signIn