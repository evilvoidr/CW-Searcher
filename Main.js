const BaseUrl = "https://websitewhereitestthings.neocities.org/YeepCWfinder/"
const Etxt = document.getElementById("Error")
const CW_List = [
    "GADGETTALES", "PEEPS", "YEEPSVILLE", "SADMAN", "BASEWARS", "MALAKOR",
    "INTRUDER", "SPIDERRUN", "THEGATE", "PLAYRP", "COOLESTWOOPETS", "FLAKE",
    "RESKINBATTLE", "FNAFMOVIE", "DUCKANDGOOB", "CLASHERS", "GAMESHOW", "GAME1PRODUCTION",
    "POOKSYBASE", "SHADOWMILKUP"
]
Etxt.style.opacity = 0
  
document.addEventListener("keydown", (e) => {
    if(Etxt.style.opacity == 1){
        Etxt.style.opacity = 0
    }
    

    if (e.key !== "Enter") return;
        let TextEdit = document.getElementById("Text").value.toUpperCase().trim();
        if(CW_List.includes(TextEdit)){
            window.open(BaseUrl + TextEdit)
            Etxt.textContent = ""
        }
        else{
            Etxt.textContent = "Comunity world not found"
            Etxt.style.opacity = 1
    }
})
