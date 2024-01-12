const prefix='*00000000';

exports.header=({ amount,ccp,key, count,month,year})=>{
const suffix="              0";

return prefix+formatCCP(ccp,key)

+formatAmount( amount)+formatCount(count)+formatDate(month,year)

+suffix
}


exports.line=({name, ccp, amount})=>{
let initial= prefix+formatCCP(ccp)+formatAmount(amount)+formatName(name)
return  String(initial).padEnd(61,' ')+'1\n'
}


const formatName=(fullName)=>{
    let str=(fullName.length>27)? fullName.slice(0,27):fullName
  return  String(str).padStart(27,' ')
}

const formatCCP=(ccp,key)=>{
return String(ccp).padStart(10,'0')+String(key).padStart(2,'0');
}
// const formatCCP=(ccp,key)=>{
//     return x(ccp)(key);
//     }
//     const completeCCP=(key)=>{
//         return function(ccp){
//             return  ccp.+key;
//         }
//     }
//     const x=completeCCP(key);
    
const formatAmount=(amount)=>{
    return String(Number(amount)*100).padStart(13,'O')
}


// le nbr des benificiaires
const formatCount=(count)=>{
    return String(Number(count).toFixed(0)).padStart(7,'O');
}

const formatDate=(month,year)=>{
    return String(Number(month).toFixed(0)).padStart(2,'O')+
    String(Number(year).toFixed(0)).padStart(4,'O');
}
