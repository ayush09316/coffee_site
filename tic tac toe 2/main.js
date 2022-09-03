 //selecting all starting page tags
let startingPage =document.querySelector("#startingPage");
let choose =document.querySelectorAll(".choose");
 //selecting all main page tags
let mainPage;
mainPage = document.querySelector("#mainPage");
let showChange =document.querySelector("#showChange");
let boxes =document.querySelectorAll(".boxes");
 //selecting all winner page tags
let winner=document.querySelector("#winner");
let winnerName=document.querySelector("#winnerName");
let quit=document.querySelector("#quit");
 //For changing turns:
 //False=>X's turn
 //True=>Y's turn
let changeTurn=null;
 //Select which you want to be:X or O
                                                          
choose.forEach(chooseNow =>{
    chooseNow.addEventListener("click",()=>{
        if(chooseNow.id==="playerX"){
            changeTurn=false;
            showChange.style.left="0px";
            console.log(changeTurn);  
        }else{
            changeTurn=true;
            showChange.style.left="160px";
            console.log(changeTurn);

        }
        startingPage.style.display="none";
        mainPage.style.display="block";
    })
});
boxes.forEach(items=>{
    items.addEventListener("click",()=>{
                                                                 //Add X icon if changeTurn is false
                                                                 //Add O icon if changeTurn is True
        if (changeTurn==false){
            items.innerHTML=`<i class="X">X</i>`;
            items.id="X";
            items.style.pointerEvent="none";
            showChange.style.left="160px";
                                                                 //change the 'changeTurn' from false to true
            changeTurn=true;
        }else{
            items.innerHTML=`<i class="O">O</i>`;
            items.id="O";
            items.style.pointerEvent="none";
            showChange.style.left="0px";
                                                                 //change the 'changeTurn' from true to false
            changeTurn=false;
        }
        winningFunc();
        drawFunc();
    })
})
                                                                  //All possible winning combination:
let winningCombinations=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
]
let winningFunc= ()=>{
    for (let a = 0; a <= 7; a++) {
        let b = winningCombinations[a];
        //console.log(b);
        if (boxes[b[0]].id == "" || boxes[b[1]].id == "" || boxes[b[2]].id == "") {
            continue;
        } else if (boxes[b[0]].id == "X" && boxes[b[1]].id == "X" && boxes[b[2]].id == "X") {
             //console.log("X is The Winner");
            // Adding Winner text
            winnerName.innerText = `Player X Win The Game!`;
            // show "Winner Page" & Hide "Main Page"
            mainPage.style.display = "none";
            winner.style.display = "block";
        } else if (boxes[b[0]].id == "O" && boxes[b[1]].id == "O" && boxes[b[2]].id == "O") {
            // console.log("O is The Winner");
            // Adding Winner text
            winnerName.innerText = `Player O Win The Game!`;
            // show "Winner Page" & Hide "Main Page"
            mainPage.style.display = "none";
            winner.style.display = "block";
        } else {
            continue;
        }
    }
}
//Match draw function
let drawFunc= ()=> {
    if( boxes[0].id !="" && boxes[1].id !="" &&
    boxes[2].id !="" && boxes[3].id !="" &&
    boxes[4].id !="" && boxes[5].id !="" &&
    boxes[6].id !="" && boxes[7].id !="" && boxes[8].id !=""){
        winnerName.innerText="Match Draw !!!";
        // Show winner page & hide main-page
        mainPage.style.display="none";
        winnerName.style.display="block";
    }
}
//Reset game
quit.addEventListener("click",()=>{
    window.location.reload();
})
