const calculate=require('./utils');
const data=require('./sampleData');
const getOver=require('./getOversFromBalls');


//Scenario 1a from the challenge
// let answer1A=calculate.calculateRuns(4,3,120,20,3);
// if(answer1A>=120)
//     console.log(`${data[3].Team} should be restricted at a score which is less than or equal to 119`);
// else
//     console.log(`${data[3].Team} should be restricted at a score which is  less than or equal to ${answer1A}`)


//Scenario 1b from the challenge
// let answer1b=calculate.calculateOvers(4,3,119,20,3);
// if(answer1b>=20)
//     console.log(`${data[4].Team} should be chase the target under 20 overs (between 0 to 20 overs)`);
// else
//     console.log(`${data[4].Team} should chase the target under ${getOver(parseFloat(answer1b))} overs (between 0 to ${getOver(parseFloat(answer1b-1))})so that ${data[4].Team} can move to position 3.`)



//Scenario 2a from the challenge
// let answer2a=calculate.calculateRuns(4,2,80,20,3);
// if(answer2a>=80)
//     console.log(`${data[2].Team} should be restricted at a score which is less than or equal to 79`);
// else
//     console.log(`${data[2].Team} should be restricted at a score which is less than or equal to ${parseInt(answer2a)} runs so that ${data[4].Team} can move to position 3.`)


//Scenario 2b from the challenge
let answer2b=calculate.calculateOvers(4,2,79,20,3);
if(answer2b/6>=20)
    console.log(`${data[4].Team} should be chase the target under 20 overs (between 0 to 20 overs)`);
else
    console.log(`${data[4].Team} should chase the target under ${getOver(parseFloat(answer2b)/6)} overs (between 0 to ${getOver(parseFloat(answer2b-1)/6)})so that ${data[4].Team} can move to position 3.`)



