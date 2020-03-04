const getOver=require('./getTotalOvers');

function calculateNrr(a,b,c,d){
    // console.log(a,b.toFixed(1),c,d)
    // console.log(a/b,c/d)
    // console.log(a/b-c/d)
    let ans=(Number(a)/getOver(Number(b).toFixed(1))).toFixed(3)-(Number(c)/getOver(Number(d))).toFixed(3)

    return ans.toFixed(3);
}

module.exports=calculateNrr;
