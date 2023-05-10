console.log("this is Game")
let turn = "X"
let gameOver = false 

// function to change the turn

const changeTurn = () => {
  return turn === "X" ? "0" : "X"
}

// function to check for a win
const checkWin = () => {
  let boxtexts = document.getElementsByClassName('box-text');
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  win.forEach(e => {
    if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
        document.querySelector(".info").innerText = boxtexts[e[0]].innerText + "  Won"
        gameOver = true;
        document.querySelector('.info').style.color = "green";
                document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "70px";
        document.querySelector('.imgBox').getElementsByTagName('img')[1].style.width = "70px";
        document.querySelector('.imgBox').getElementsByTagName('img')[2].style.width = "70px";

    }
  })
}

// Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxText = element.querySelector('.box-text');
  element.addEventListener('click', () => {

    if (boxText.innerText === '') {
      boxText.innerText = turn;
      turn = changeTurn();
      console.log('audio on');
      checkWin();
      if(!gameOver){
      document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    }
    }
  })
})


// Add on click listner on reset button 

reset.addEventListener('click',()=>{
  let boxTexts = document.querySelectorAll('.box-text');
   Array.from(boxTexts).forEach(element =>{
    element.innerText = ''
    gameOver = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.imgBox').getElementsByTagName('img')[1].style.width = "0px";
    document.querySelector('.imgBox').getElementsByTagName('img')[2].style.width = "0px";
    document.querySelector('.info').style.color = "black";


   });
})