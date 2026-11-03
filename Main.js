
const BaseUrl = "https://websitewhereitestthings.neocities.org/YeepCWfinder/"
const Etxt = document.getElementById("Error")
const srch = document.getElementById("Text")
const sug = document.getElementById("sug")
const count = document.getElementById("Count")
const CW_List = [
    "GADGETTALES", "PEEPS", "YEEPSVILLE", "SADMAN", "BASEWARS", "MALAKOR",
    "INTRUDER", "SPIDERRUN", "THEGATE", "PLAYRP", "COOLESTWOOPETS", "FLAKE",
    "RESKINBATTLE", "FNAFMOVIE", "DUCKANDGOOB", "CLASHERS", "GAMESHOW", "GAME1PRODUCTION",
    "POOKSYBASE", "SHADOWMILKUP"
]
Etxt.style.opacity = 0
const countcount = CW_List.length
console.log(countcount)
count.textContent = "CW's: " + countcount



const buttons = CW_List.map(name => {
    const Newbut = document.createElement("button")
    Newbut.textContent = name
    Newbut.hidden = true;
    Newbut.classList = "NewBut"
    Newbut.addEventListener("click", () => {
        srch.value = name;
        HA();
    })
    sug.appendChild(Newbut);
    return Newbut;
})
function HA() {
    buttons.forEach(b => b.hidden = true)
}
  
srch.addEventListener("input", (e) => {
    const TextEdit = srch.value.toUpperCase().trim()
    if(TextEdit === "") return HA()
    Etxt.style.opacity = 0;
    
    for(const b of buttons){
        const matches = b.textContent.toUpperCase().includes(TextEdit);
        if(matches){
            b.hidden = false
        }
        else{
            b.hidden = true
        }
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
