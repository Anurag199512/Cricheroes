const calculate=require('./utils');
const getOver=require('./getOversFromBalls');
const fs = require('fs');
let fileData = fs.readFileSync('data.json');
let data = JSON.parse(fileData);
let nrr=require('./calculateNRR');

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
//console.log(`${data[4].Team} should restrict ${data[3].Team} at a score which is between ${answer1A} and 119`)
console.log(`${data[4].Team} should restrict ${data[3].Team} at a score which is between ${answer1A} and 119 and the NRR  for Treacherous will be between  ${nrr(data[4].forTeam.runs+120,data[4].forTeam.overs+20,data[4].againstTeam.runs+119,data[4].againstTeam.overs+20)} and ${nrr(data[4].forTeam.runs+120,data[4].forTeam.overs+20,data[4].againstTeam.runs+answer1A,data[4].againstTeam.overs+20)}`);


//Scenario 1b from the challenge
console.log();
let answer1b=calculate.calculateOvers(4,3,119,20,3);
//console.log(`${data[4].Team} should chase the target between ${getOver(parseFloat(answer1b))} and 20 overs so that ${data[4].Team} can move to position 3.`)
console.log(`${data[4].Team} should chase the target between ${getOver(parseFloat(answer1b))} and 20 overs so that ${data[4].Team} can move to position 3 and the NRR  for Treacherous will be between ${nrr(data[4].forTeam.runs+120,data[4].forTeam.overs+20,data[4].againstTeam.runs+119,data[4].againstTeam.overs+20)} and ${nrr(data[4].forTeam.runs+120,data[4].forTeam.overs+getOver((answer1b)),data[4].againstTeam.runs+119,data[4].againstTeam.overs+20)}`)


console.log();
//Scenario 2a from the challenge
let answer2a=calculate.calculateRestrictedRuns(4,2,80,20,3);
console.log(`${data[2].Team} should be restricted at a score which is between ${parseInt(answer2a)} and 79 runs so that ${data[4].Team} can move to position 3 and the NRR  for Treacherous will be between ${nrr(data[4].forTeam.runs+80,data[4].forTeam.overs+20,data[4].againstTeam.runs+79,data[4].againstTeam.overs+20)} and  ${nrr(data[4].forTeam.runs+80,data[4].forTeam.overs+20,data[4].againstTeam.runs+answer2a,data[4].againstTeam.overs+20)}`)


console.log();
//Scenario 2b from the challenge
let answer2b=calculate.calculateOvers(4,2,79,20,3);
console.log(`${data[4].Team} should chase the target between ${getOver(parseFloat(answer2b))} and 20 overs  so that ${data[4].Team} can move to position 3 and the NRR  for Treacherous will be between ${nrr(data[4].forTeam.runs+80,data[4].forTeam.overs+20,data[4].againstTeam.runs+79,data[4].againstTeam.overs+20)} and ${nrr(data[4].forTeam.runs+80,data[4].forTeam.overs+getOver((answer2b)),data[4].againstTeam.runs+79,data[4].againstTeam.overs+20)}`)



