let play = document.querySelector("#play");
play.addEventListener("click",
    function(event) {
        event.preventDefault;

    }
)

// funzione crea elementi square
function box() {

    // crea elemento e aggiungo classe square
    const elem = document.createElement("div");
    elem.classList.add("square");
    
    // return
    return elem;
}