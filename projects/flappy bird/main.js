let block = document.getElementById("block")
let hole = document.getElementById("hole")
let character = document.getElementById("character")
let counter = 0
let jumping = 0

//changing the position of the hole for every coming block
hole.addEventListener("animationiteration",()=>{
    let random = Math.random()*3
    let top = (random*100)+150
    hole.style.top = -(top) + "px"
    counter ++
})

//simulate gravity
setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    if (jumping == 0){
    character.style.top = (characterTop+3)+"px"
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"))
    let cTop = -(500-characterTop)
    if(characterTop>480||(blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130))){
        alert("Game Over,your score is:"+counter)
        character.style.top = 100+"px"
        counter = 0
    }
},10)

//jump
function jump(){
    jumping = 1
    let jumpingCount = 0
    let jumpInverval = setInterval(function(){
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
        if((characterTop>6)&&(jumpingCount<15)){
            character.style.top = (characterTop-5)+"px"
        }
        if(jumpingCount>20){
            clearInterval(jumpInverval)
            jumping = 0
            jumpingCount = 0
        }
        jumpingCount++
    },10)
}