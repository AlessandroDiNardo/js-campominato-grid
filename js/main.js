/* L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const myContainer = document.querySelector(".container");

// apparizione livello
let btnPlay = document.getElementById("play");
btnPlay.addEventListener('click',
    function(event) {
        event.preventDefault()

        let level = document.getElementById("difficult").value;
        // easy level
        if(level === "easy") {

            myContainer.innerHTML = '';

            for (let i = 1; i <= 100; i++) {

                let newElem = box();
                newElem.addEventListener("click",
                        function(){
                            newElem.classList.toggle("clicked");
                            console.log("Levello easy, elemento selzionato: ", i);
                        }
                    );
                
                myContainer.appendChild(newElem);
                newElem.append(i);
                newElem.classList.add("easy");
            }
        }

        // medium level
        if(level === "medium") {

            myContainer.innerHTML = '';
            
            for (let i = 1; i <= 81; i++) {
        
                let newElem = box();
                newElem.addEventListener("click",
                        function(){
                            newElem.classList.toggle("clicked");
                            console.log("Levello medium, elemento selzionato: ", i);
                        }
                    );
                
                myContainer.appendChild(newElem);
                newElem.append(i);
                newElem.classList.add("medium");
            }
        }

        // hard level
        // medium level
        if(level === "hard") {

            myContainer.innerHTML = '';

            for (let i = 1; i <= 49; i++) {
        
                let newElem = box();
                newElem.addEventListener("click",
                        function(){
                            newElem.classList.toggle("clicked");
                            console.log("Levello hard, elemento selzionato: ", i);
                        }
                    );
                
                myContainer.appendChild(newElem);
                newElem.append(i);
                newElem.classList.add("hard")
            }
        }
    }
);
