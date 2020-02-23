const calculate=require('./utils');
const getOver=require('./getOversFromBalls');
const fs = require('fs');
let fileData = fs.readFileSync('data.json');
let data = JSON.parse(fileData);


/* FUNCTION SPECIFICATION

calculateRestrictedRuns(homeTeamId,awayTeamId,runsScored,overTaken,moveToPosition)

homeTeamId refers to the current rank of the team  which we want to move to specific position
awayTeamId refers to the current rank of the team opponent team
runsScored refers to the runs scored by team batting first
overTaken refers to the over taken by team batting first
moveToPosition refers to the position we want our team to be moved


function calculateOvers will return the range of over under which homeTeam should chase the target

calculateOvers(homeTeamId,awayTeamId,runsScored,overTaken,moveToPosition)
homeTeamId refers to the current rank of the team  which we want to move to specific position
awayTeamId refers to the current rank of the team opponent team
runsScored refers to the runs scored by team batting first
overTaken refers to the over taken by team batting first
moveToPosition refers to the position we want our team to be moved
*/


//Scenario 1a from the challenge
let answer1A=calculate.calculateRestrictedRuns(4,3,120,20,3);
if(answer1A>=120)
    console.log(`${data[4].Team} should restrict ${data[3].Team} at a score which is less than or equal to 119 to move to position 3`);
else
    console.log(`${data[4].Team} should restrict ${data[3].Team} at a score which is less than or equal to ${answer1A}`)


//Scenario 1b from the challenge
let answer1b=calculate.calculateOvers(4,3,119,20,3);
if(answer1b>=20)
    console.log(`${data[4].Team} should chase the target under 20 overs (between 0 to 20 overs)`);
else
    console.log(`${data[4].Team} should chase the target under ${getOver(parseFloat(answer1b))} overs (between 0 to ${getOver(parseFloat(answer1b-1))})so that ${data[4].Team} can move to position 3.`)



//Scenario 2a from the challenge
let answer2a=calculate.calculateRestrictedRuns(4,2,80,20,3);
if(answer2a>=80)
    console.log(`${data[2].Team} should be restricted at a score which is less than or equal to 79`);
else
    console.log(`${data[2].Team} should be restricted at a score which is less than or equal to ${parseInt(answer2a)} runs so that ${data[4].Team} can move to position 3.`)


//Scenario 2b from the challenge
let answer2b=calculate.calculateOvers(4,2,79,20,3);
if(answer2b/6>=20)
    console.log(`${data[4].Team} should be chase the target under 20 overs (between 0 to 20 overs)`);
else
    console.log(`${data[4].Team} should chase the target under ${getOver(parseFloat(answer2b)/6)} overs (between 0 to ${getOver(parseFloat(answer2b-1)/6)}) so that ${data[4].Team} can move to position 3.`)



