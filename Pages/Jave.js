
const Title = document.getElementById("title")
function BnClk_SFX(){
    let audio = new Audio("../ui_imagine_select.ogg")
    audio.play()
}

Title.textContent = window.location.href.slice(28 + 18)
Title.onclick = function(){
    window.open("info.html")
    BnClk_SFX()
}
document.title = Title.textContent
