import { CW_List } from "../Vars.js";
const main = document.getElementById("Main")
const BASE_URL = "https://evilvoidr.github.io/CW-Searcher/Pages/"

function shuffle(array) {
  let ArrayL = array.length
  while (ArrayL != 0) {
    let random = Math.floor(Math.random() * ArrayL)
    ArrayL--
    [array[ArrayL], array[random]] = [
    array[random], array[ArrayL]]
  }
}

shuffle(CW_List)

const buttons2 = CW_List.map(name => {
    const Newbut = document.createElement("button")
    Newbut.textContent = name
    Newbut.classList = "DiscoveryBut"
    Newbut.addEventListener("click", () => {
        window.open(BASE_URL + name)
    })
    main.appendChild(Newbut);
    return Newbut;
})
