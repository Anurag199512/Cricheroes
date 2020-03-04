
//below function is used to calculate no of balls from count of over
function convertToOvers(decimalOver){

    let tempBalls=String(decimalOver).split('.');

    if(tempBalls.length===2)
    {
        //if over is like 11.5 then we return [11*6 +5] using below
        return Number(tempBalls[0])+Math.round(Number(tempBalls[1][0])*6)
    }
    else    
    {
        return Number(tempBalls[0]);
    }
}

module.exports= convertToOvers;

