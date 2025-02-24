let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let uScore=document.querySelector("#user-score");
let cScore=document.querySelector("#comp-score");

//comp-choice
const genCompChoice=()=>{
    let options=["rock","paper","scissor"];
    let idx=Math.floor(Math.random()*3);
    return options[idx];
};

const drawGame=()=>{
    msg.innerText="Game was Draw.Play Again!";
    msg.style.backgroundColor="#081b31";
};

const showWinners=(userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        uScore.innerText=userScore;
    }
    else{
        msg.innerText=`You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        cScore.innerText=compScore;
    }
};

const playGame=(userChoice)=>{
    console.log("user-choice =",userChoice);
    const compChoice=genCompChoice();
    console.log("comp-choice =",compChoice);

    //Fight
    if(userChoice==compChoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            //paper scissor
            userWin=compChoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            //rock scissor
            userWin=compChoice=="scissor"?false:true;
        }
        //userchoice= scissor
        else{
            //rock paper
            userWin=compChoice=="rock"?false:true;
        }
        showWinners(userWin,userChoice,compChoice);
    }
};

//user-choice
choices.forEach((ch)=>{
    ch.addEventListener("click",()=>{
        const userChoice=ch.getAttribute("id");
        playGame(userChoice);
    })
});