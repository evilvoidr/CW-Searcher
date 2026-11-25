
const Title = document.getElementById("title")
const body = document.getElementById("body")
const bodyT = body.textContent.trim()
function BnClk_SFX(){
    let audio = new Audio("../ui_imagine_select.ogg")
    audio.play()
}
if(!bodyT.endsWith(".")){
    body.textContent = bodyT + "."
}
Title.textContent = window.location.href.slice(window.location.href.lastIndexOf("/") + 1)
Title.onclick = function(){
    window.open("info.html")
    BnClk_SFX()
}
document.title = Title.textContent
