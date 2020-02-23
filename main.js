const calculate=require('./utils');
const getOver=require('./getOversFromBalls');
const readline = require("readline");

const fs = require('fs');
let fileData = fs.readFileSync('data.json');
let data = JSON.parse(fileData);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
get input from user for the following variables

homeTeamId refers to the current rank of the team  which we want to move to specific position
awayTeamId refers to the current rank of the team opponent team
runsScored refers to the runs scored by team batting first
overTaken refers to the over taken by team batting first
moveToPosition refers to the position we want our team to be moved
battingFirstTeamId refers to the team who is batting first
*/

rl.question("Current ranking of favoured team? ", function(homeTeamId) {
    rl.question("Current ranking of opponent team? ", function(awayTeamId) {
        rl.question("No of runs scored by team batting first? ", function(runsScored) {
            rl.question("To which position you want you favoured to move? ", function(moveToPosition) {
                rl.question(`Please give the ranking of the team which is batting first between (${homeTeamId} and ${awayTeamId})`, function(battingFirstTeamId) {
        
                    if(!homeTeamId || !awayTeamId||!runsScored||!moveToPosition||!battingFirstTeamId)
                    {
                        console.log();
                        console.log('Kindly provide all the information for calculation');
                        process.exit(0);
                    }
                    else if(battingFirstTeamId!= homeTeamId && battingFirstTeamId!=awayTeamId)
                    {
                        console.log(`You have selected team which is not playing the match for batting first. Select correct ranking.`);
                        rl.close();
                    }
                    else if(homeTeamId==5 || awayTeamId==5)
                    {
                        console.log(`${data[5].Team} can not play any match as they have completed all of their matches.`);
                        rl.close();
                    }
                    else if(data[moveToPosition].Pts-data[homeTeamId].Pts>2){
                        console.log(`${data[homeTeamId].Team} cannot move to position ${moveToPosition} by winning this match`);
                        rl.close();
                    } 
                    else{
                        if(battingFirstTeamId===homeTeamId){

                            let answer=calculate.calculateRestrictedRuns(homeTeamId,awayTeamId,Number(runsScored),20,moveToPosition);
                            //console.log(homeTeamId,awayTeamId,runsScored,20,moveToPosition,answer)
                            if(answer>=runsScored)
                                console.log(`${data[homeTeamId].Team} should restrict ${data[awayTeamId].Team} at a score which is less than or equal to ${runsScored-1} to move to position ${moveToPosition}`);
                            else
                                console.log(`${data[homeTeamId].Team} should restrict ${data[awayTeamId].Team} at a score which is less than or equal to ${answer.toFixed(0)}`);
                        }
                        else{
                            let answer=calculate.calculateOvers(homeTeamId,awayTeamId,Number(runsScored),20,moveToPosition);
                            if(answer/6>=20)
                                console.log(`${data[homeTeamId].Team} should be chase the target under 20 overs (between 0 to 20 overs)`);
                            else
                                console.log(`${data[homeTeamId].Team} should chase the target under ${getOver(parseFloat(answer)/6)} overs (between 0 to ${getOver(parseFloat(answer-1)/6)}) so that ${data[homeTeamId].Team} can move to position ${moveToPosition}.`)

                        }
                        rl.close();
                    }
                });
            });            
        });
    });
});

rl.on("close", function() {
    console.log("\nThanks for using our app !!!");
    process.exit(0);
});
