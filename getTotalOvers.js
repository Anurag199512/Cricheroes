//below we are calculating decimal value of over from the figure value

/*
    converting 123.3 overs into 123 full overs and 3 balls into 1/2 overs that is equal to .5
    so we get final figurative value as 123.5  
    
*/
function getOverValue(over){


    //splitting the value to get full no. of over and no. of ball ex. (123.3) will be split into [123,3]
    let tempOver=String(over).split('.');

    if(tempOver.length===2)
        return Number(parseFloat(Number(tempOver[0])+Number(tempOver[1])/6).toFixed(3));
    else    
        return Number(tempOver[0]);

}

module.exports= getOverValue;

