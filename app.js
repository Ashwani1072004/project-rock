let userScore=0;
let compScore=0;
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genComputerChoice=()=>{
    const option=["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
    return option[randIdx];
}
const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game draw";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        console.log("you win");
        userScore++;
        userScorePara.innerText=userScore;
    msg.innerText=`You win! ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";

}
    else{
    console.log("you lose");
    compScore++;
    compScorePara.innerText=compScore;

    msg.innerText=`You loose! ${compChoice} beats ${userchoice} `;
    msg.style.backgroundColor="red";
}
}
const playGame=(userchoice)=>{
    console.log("user choice is ", userchoice);
    const compChoice=genComputerChoice();
console.log("comp choice",compChoice);
if(userchoice==compChoice){
drawGame();
}
else{
let userWin=true;
if(userchoice==="rock"){
userWin=compChoice==="paper"? false:true;
}
else if(userchoice==="paper")
    userWin=compChoice==="scissors"?false:true;
else if(userchoice==="scissors")
    userWin=compChoice==="rock "?false:true;
showWinner(userWin,userchoice,compChoice);
}
 
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        console.log("choise was clicked ", userchoice);
playGame(userchoice);
         
    })
})