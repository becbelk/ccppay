const prefix='*00000000';

exports.header=({ amount,ccp,key, count,month,year})=>{
const suffix="              0";

return prefix+formatCCP(ccp,key)
+formatAmount( amount)+formatCount(count)+formatDate(month,year)
+suffix
}


exports.line=({name, ccp, amount})=>{
}


const formatName=(fullName)=>{
    let str=(fullName.length>27)? fullName.slice(0,27):fullName
  return  String(str).padStart(27,' ')
}

const formatCCP=(ccp,key)=>{
return String(ccp).padStart(10,'0')+String(key).padStart(2,'0');
}
const formatAmount=(amount)=>{
    return String(Number(amount)*100).padStart(13,'O')
}
const formatCount=(count)=>{
    return String(Number(count).toFixed(0)).padStart(7,'O');
}

const formatDate=(month,year)=>{
    return String(Number(month).toFixed(0)).padStart(2,'O')+
    String(Number(year).toFixed(0)).padStart(4,'O');
}