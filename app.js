let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}
const drawGame=()=>{
    msg.innerText="game was draw,play again.";
    msg.style.backgroundColor="black";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userScorepara.innerText=userscore;
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compScorepara.innerText=compscore;
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    });
});