let computerGuess;
let userGuess= [];
let userNumberUpdate= document.getElementById("head2");
let userGuessUpdate = document.getElementById("inputBox")


const init = () => {
    computerGuess = Math.floor(Math.random()*100);
    // console.log( "anshu",computerGuess);
    document.getElementById("box3").style.display="none";
    document.getElementById("screen").style.display="none";
};
    const startGame = () => {
document.getElementById("boxes").style.display="none";
document.getElementById("screen").style.display="block";
    };
    const newGameBegin = () => {
        window.location.reload();
    }
    const startNewGame = () => {
        document.getElementById("box3").style.display= "inline";
        userGuessUpdate.setAttribute("disabled",true)
    }

// init();
const compareGuess = () => {
const userNumber= Number(document.getElementById("inputBox").value);
userGuess = [...userGuess,userNumber];
document.getElementById("zero2").innerHTML=userGuess;
if(userGuess.length< maxGuess){
if(userNumber>computerGuess){
    userNumberUpdate.innerHTML="Your guess is high ";
    userGuessUpdate.value="";
}
else if(userNumber<computerGuess){
    userNumberUpdate.innerHTML="Your guess is low";
    userGuessUpdate.value="";
}
else{
    userNumberUpdate.innerHTML="It is correct";
    userGuessUpdate.value="";
    startNewGame();
}
}
else{
    if(userNumber>computerGuess){
        userNumberUpdate.innerHTML=`You Loose !! correct number was ${computerGuess} `;
        userGuessUpdate.value="";
        startNewGame();
    }
    else if(userNumber<computerGuess){
        userNumberUpdate.innerHTML=`You Loose !! correct number was ${computerGuess}`;
        userGuessUpdate.value="";
        startNewGame();

    }
    else{
        userNumberUpdate.innerHTML="It is correct";
        userGuessUpdate.value="";
        startNewGame();

    }
    }
document.getElementById("zero1").innerHTML= userGuess.length;
};


const easyMode = () =>{
    startGame();
    maxGuess=10;
};
const hardMode = () =>{
    startGame();
    maxGuess=5;
};