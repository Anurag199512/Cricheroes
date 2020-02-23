
//below function is used to calculate no of balls from count of over
function getNoOfBalls(over){

    let tempBalls=String(over).split('.');

    if(tempBalls.length===2)
    {
        //if over is like 11.5 then we return [11*6 +5] using below
        return Number(tempBalls[0])*6+(Number(tempBalls[1][0]))
    }
    else    
    {
        //if over is like do not have any balls and is pure int then we return [over*6]
        return Number(tempBalls[0])*6;
    }
}

module.exports= getNoOfBalls;

