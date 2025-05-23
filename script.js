let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");


const drawGame = () =>{
    msg.innerText="Game was drawn, Play again";
    msg.style.backgroundColor="black";
}

const genCompChoice = () =>{
    const options=["rock","paper","scissors"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}

const showWinner = (userWin,userchoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText=`You win! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText=`You lose ,${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userchoice) =>{
    console.log("User Choice: ",userchoice);
    const compChoice=genCompChoice();

    if(userchoice==compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin = compChoice==="paper" ? false : true;
        }
        else if(userchoice==="paper"){
            userWin = compChoice==="scissors" ? false : true;
        }
        else{
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin,userchoice,compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playGame(userchoice);
    });
});