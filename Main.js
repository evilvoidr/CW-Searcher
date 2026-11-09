
const BaseUrl = "https://evilvoidr.github.io/CW-Searcher/Pages/"
const Etxt = document.getElementById("Error")
const srch = document.getElementById("Text")
const sug = document.getElementById("sug")
const count = document.getElementById("Count")
const CW_List = [
    "GADGETTALES", "PEEPS", "YEEPSVILLE", "SADMAN", "BASEWARS", "MALAKOR",
    "INTRUDER", "SPIDERRUN", "THEGATE", "PLAYRP", "COOLESTWOOPETS", "FLAKE",
    "RESKINBATTLE", "FNAFMOVIE", "DUCKANDGOOB", "CLASHERS", "GAMESHOW", "GAME1PRODUCTION",
    "POOKSYBASE", "SHADOWMILKUP", "FARMSIM", "TRADEPLACE", "LOADOUT", "CUTEMARIOVR",
    "3ZA3U3LA", "YEEPSTHEATRE", "GUESSTHEBUILD", "THEDREAMSCAPE", "SUBURBANISLAND",
    "FREEBLOCKS", "GGHL", "EXPERIMENT406", "SILENCED", "HOLIDAYRUN", "ORANGE", "SHADOWSWRLD",
    "KNOCKOUTS", "POTATOYEEP", "NINTENDOWORLD", "MONSTERMAYHEM"
]
Etxt.style.opacity = 0


if(window.location.href != "https://evilvoidr.github.io/CW-Searcher/"){
    //document.getElementById("Bodyy").remove()
}

function BnClk_SFX(){
    let audio = new Audio("ui_imagine_select.ogg")
    audio.play()
}

const buttons = CW_List.map(name => {
    const Newbut = document.createElement("button")
    Newbut.textContent = name
    Newbut.hidden = true;
    Newbut.classList = "NewBut"
    Newbut.addEventListener("click", () => {
        srch.value = name;
        BnClk_SFX()
        HA();
    })
    sug.appendChild(Newbut);
    return Newbut;
})
// hide all
function HA() {
    buttons.forEach(b => b.hidden = true)
}
  
srch.addEventListener("input", (e) => {

    const TextEdit = srch.value.toUpperCase().trim()
    if(TextEdit === "") return HA()
    Etxt.style.opacity = 0;
    let Show = 0
    for(const b of buttons){
        const matches = b.textContent.toUpperCase().includes(TextEdit);
        if(b.textContent.includes(TextEdit) && Show < 5){
            b.hidden = false
            Show++
        }
        else{
            b.hidden = true
        }
        if (CW_List.includes(TextEdit))
            HA()
    }
})
document.addEventListener("keydown", (e) =>{
    if (e.key !== "Enter") return;
        if(CW_List.includes(srch.value.toUpperCase().trim())){
            window.open(BaseUrl + srch.value.toUpperCase().trim())
        }
        else{
            Etxt.textContent = "Community world not found"
            Etxt.style.opacity = 1
    }
})
