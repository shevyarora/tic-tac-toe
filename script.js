let boxes=document.querySelectorAll('.box')
// console.log(boxes)

let music1= new Audio("./music.mp3")
let m2=new Audio("popup.mp3")
let m3=new Audio("o.wav")
let m4=new Audio("x.wav")
let m5=new Audio("draw.wav")

music1.play()

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    
]

let turnX=true
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("hey")
        m2.play()
        if(turnX){
            box.innerText="X"
            turnX=false
        }
        else{
            box.innerText="O"
            turnX=true
        }
        box.disabled=true
        
        checkWinner()
    })
})
let count=0
const checkWinner=()=>{   
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText
        let pos2=boxes[pattern[1]].innerText
       let pos3=boxes[pattern[2]].innerText

       if(pos1===pos2 && pos2===pos3 && pos1!="" && pos2!="" && pos3!="" ){
        boxes.forEach((box)=>{
            box.disabled=true
            document.getElementById('m').style.display="none"
          document.getElementById('winner').style.display="block"
          document.getElementById('winner').style.height="100vh"
          music1.pause()
          if(pos1=="X" && pos2=="X" && pos3=="X"){
            m4.play()
          }
          else if(pos1=="O" && pos2=="O" && pos3=="O"){
          m3.play()
        }
          document.getElementById('win').innerText="Congratulations ! Winner is "+ pos1
        })
       }
    }
    count++
    if(count==9){
        document.getElementById('m').style.display="none"
        document.getElementById('winner').style.display="block"
          document.getElementById('winner').style.height="70vh"
          music1.pause()
          m5.play()
        document.getElementById('win').innerText="Draw !"
    }
}

let resetbtn=document.querySelector('#btn2')
resetbtn.addEventListener("click",()=>{
    location.href="index.html"
})



let newgame=document.querySelector('#new-game')
newgame.addEventListener("click",()=>{
    location.href="index.html"
})


