const hero = document.getElementById('hero')
const cactus = document.getElementById('cactus')
document.addEventListener("keydown", function(event)  {
    jump();
})  
function jump() {
   if( hero.classList != 'jump') {
    hero.classList.add("jump")
   }
   
    setTimeout(function () {
        hero.classList.remove("jump")
    }, 300)
   
}
let isLive = setInterval (function () {
    let heroTop = parseInt(globalThis.getComputedStyle(hero).getPropertyValue('top'))
    let cactusLeft = parseInt(globalThis.getComputedStyle(cactus).getPropertyValue('left'))
    if(cactusLeft < 35 && cactusLeft > 0 && heroTop >= 114) {
        alert("Вы проиграли, игра закончена!")
    }
}, 10)