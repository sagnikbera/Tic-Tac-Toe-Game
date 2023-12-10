let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO= true; //player X , player O
let count = 0;//To Track Draw

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    count = 0;
    msgContainer.classList.add("hide");
};

const newGame = () =>{
    turn0 = true;
    enableBoxes();
    count = 0;
    msgContainer.classList.add("hide");
    resetBtn.classList.remove("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO === true){
            //Player O
            box.innerHTML="O";
            turnO = false;
        }else{
            //Player X
            box.innerHTML="X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWiner = checkWinner();

        if(count === 9 && !isWiner){
            gameDraw();
        }
    });
})

const gameDraw = () =>{
    msg.innerHTML = "OPPS..Game was a Draw!"
    msgContainer.classList.remove("hide");
    disableBoxes();
    resetBtn.classList.add("hide");
}



const showWinner = (winner) =>{
    msg.innerHTML = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    resetBtn.classList.add("hide");
}

const checkWinner = () =>{
    for (let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener("click",newGame);
resetBtn.addEventListener("click",resetGame);


