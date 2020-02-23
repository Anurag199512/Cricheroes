//below we are converting the count of overs by using no of balls

/*
    ex if we have no. of balls as 113 then we are doing 113/6 =18.8
    splitting above into 18 and 8 where 18 is full over and .8 is % of next over
    then we convert % it to no. of balls by (8*6/100)=.48=.5 (i.e 5 balls)
    
    so returned value is 18.5 overs
*/
function getOverFromBalls(balls){

    let tempOver=String(balls).split('.');
  
    if(tempOver.length===2)
    {
        return Number(parseFloat(Number(tempOver[0])+Number(tempOver[1][0])*.06).toFixed(1));
    }
    else    
    {   
        //if no. of balls are directly a multiple of 6 they we are returning the over count using below
        return Number(tempOver[0]);
    } 
}

module.exports= getOverFromBalls;

