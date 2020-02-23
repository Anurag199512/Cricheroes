//const data=require('./sampleData');

const getOver=require('./getTotalOvers');
const getBalls=require('./getNoOfBalls');
const findRoot=require('./findroots');
const fs = require('fs');

/*
function calculateRestrictedRuns will return the range of run in which homeTeam should restrict awayTeam

homeTeamId refers the team id for which  we want it to move to specific position
awayTeamId refers the team id of the opponent team
runsScored refers to the runs scored by team batting first
overTaken refers to the over taken by team batting first
moveToPosition refers to the position we want our team to be moved
*/

function calculateRestrictedRuns(homeTeamId,awayTeamId,runsScored,overTaken,moveToPosition){
 
    let fileData = fs.readFileSync('data.json');
    let data = JSON.parse(fileData);

    //when match is between the team who's position we want to take
    if(awayTeamId===moveToPosition){
        let homeTeamData=data[homeTeamId];
        let awayTeamData=data[awayTeamId];

        homeTeamData.forTeam.runs=homeTeamData.forTeam.runs+runsScored;
        homeTeamData.forTeam.overs=homeTeamData.forTeam.overs+overTaken;

        awayTeamData.againstTeam.runs=awayTeamData.againstTeam.runs+runsScored;
        awayTeamData.againstTeam.overs=awayTeamData.againstTeam.overs+overTaken;

        let step1=Number((homeTeamData.forTeam.runs/getOver(homeTeamData.forTeam.overs)).toFixed(3));
        let step2=Number((awayTeamData.againstTeam.runs/getOver(awayTeamData.againstTeam.overs)).toFixed(3));
        let step3=Number((homeTeamData.againstTeam.runs/getOver(homeTeamData.againstTeam.overs+20)).toFixed(3));
        let step4=Number((awayTeamData.forTeam.runs/getOver(awayTeamData.forTeam.overs+20)).toFixed(3));
        
        //console.log(step1,step2,step3,step4);

        let tempRuns=step1+step2-step3-step4;
        let restrictedRuns=(tempRuns*getOver(homeTeamData.againstTeam.overs+20)*getOver(awayTeamData.forTeam.overs+20))/(getOver(homeTeamData.againstTeam.overs+20)+getOver(awayTeamData.forTeam.overs+20));
        
        return restrictedRuns;
    }
    //when team whose position we are willing to take are not our opponent in current match
    else{
        let homeTeamData=data[homeTeamId];
        let awayTeamData=data[moveToPosition];

        homeTeamData.forTeam.runs=homeTeamData.forTeam.runs+runsScored;
        homeTeamData.forTeam.overs=homeTeamData.forTeam.overs+overTaken;

        let step1=Number((homeTeamData.forTeam.runs/getOver(homeTeamData.forTeam.overs)).toFixed(3));
        let step2=Number((homeTeamData.againstTeam.runs/getOver(homeTeamData.againstTeam.overs+20)).toFixed(3));

        let tempRuns=step1-step2-awayTeamData.NRR;
        let restrictedRuns=tempRuns*getOver(homeTeamData.againstTeam.overs+20);

        return restrictedRuns;
   
        
    }


}


/*
function calculateOvers will return the range of over under which homeTeam should chase the target

homeTeamId refers the team id for which  we want it to move to specific position
awayTeamId refers the team id of the opponent team
runsScored refers to the runs scored by team batting first
overTaken refers to the over taken by team batting first
moveToPosition refers to the position w want our team to be moved
*/
function calculateOvers(homeTeamId,awayTeamId,runsScored,overTaken,moveToPosition){
        
    let fileData = fs.readFileSync('data.json');
    let data = JSON.parse(fileData);
    //when match is between the team who's position we want to take
    if(awayTeamId===moveToPosition)
    {
        let homeTeamData=data[homeTeamId];
        let awayTeamData=data[moveToPosition];

        homeTeamData.forTeam.runs=homeTeamData.forTeam.runs+runsScored+1;

        homeTeamData.againstTeam.runs=homeTeamData.againstTeam.runs+runsScored;
        homeTeamData.againstTeam.overs=homeTeamData.againstTeam.overs+overTaken;

        awayTeamData.forTeam.runs=awayTeamData.forTeam.runs+runsScored
        awayTeamData.forTeam.overs=awayTeamData.forTeam.overs+overTaken
        awayTeamData.againstTeam.runs=awayTeamData.againstTeam.runs+runsScored+1

        let step1=Number((homeTeamData.againstTeam.runs/getOver(homeTeamData.againstTeam.overs)).toFixed(3));
        let step2=Number((awayTeamData.forTeam.runs/getOver(awayTeamData.forTeam.overs)).toFixed(3));

        let step3=getOver(homeTeamData.forTeam.overs)*(step1+step2)+getOver(awayTeamData.againstTeam.overs)*(step1+step2)-homeTeamData.forTeam.runs-awayTeamData.againstTeam.runs;

        let step4=getOver(homeTeamData.forTeam.overs)*getOver(awayTeamData.againstTeam.overs)*(step1+step2)-getOver(awayTeamData.againstTeam.overs)*homeTeamData.forTeam.runs-awayTeamData.againstTeam.runs*getOver(homeTeamData.forTeam.overs);
                
        /*
        findRoot will find the correct value of overs in which team has to be restricted by solving the quadratic eq.
        where first param =coeffecient of X^2(A)
        second param is =coeffecient of X(B)
        third param is the number(C)
        quadratic eq of type (X^2)A+B(X)+C below to get value of X
        */
        let ans=findRoot((step1+step2),step3,step4);

        //returning no of balls
        return ans*6;
    }
    
    //when team whose position we are willing to take are not our opponent in current match
    else
    {
        let homeTeamData=data[homeTeamId];
        let awayTeamData=data[moveToPosition];

        homeTeamData.forTeam.runs=homeTeamData.forTeam.runs+runsScored+1;

        homeTeamData.againstTeam.runs=homeTeamData.againstTeam.runs+runsScored;
        homeTeamData.againstTeam.overs=homeTeamData.againstTeam.overs+overTaken;

        let step1=Number((homeTeamData.againstTeam.runs/getOver(homeTeamData.againstTeam.overs)).toFixed(3));
        let step2=getBalls(Number(homeTeamData.forTeam.runs/(awayTeamData.NRR+step1))) - getBalls(homeTeamData.forTeam.overs);
        
        let restrictedOver=step2;
        
        return restrictedOver;
    }    

}

module.exports={
    calculateRestrictedRuns:calculateRestrictedRuns,
    calculateOvers:calculateOvers
}; 

