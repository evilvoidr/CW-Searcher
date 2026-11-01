
const BaseUrl = "https://websitewhereitestthings.neocities.org/YeepCWfinder/pages/"
const Etxt = document.getElementById("Error")
const CW_List = [
    "PEEPS", "TWO", "THREE"
]
Etxt.style.opacity = 0
  
document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
        let TextEdit = document.getElementById("Text").value.toUpperCase().trim();
        if(CW_List.includes(TextEdit)){
            window.open(BaseUrl + TextEdit)
            Etxt.textContent = ""
            Etxt.style.opacity = 0
        }
        else{
            Etxt.textContent = "Comunity world not found"
            Etxt.style.opacity = 1
    }
})
