let myOptionsDiv = document.querySelector(".myOptions")
let computerOptionsDiv = document.querySelector(".computerOptions")
let myOptions = myOptionsDiv.querySelectorAll("img")
let computerOptions = computerOptionsDiv.querySelectorAll("img")
let playerScore = document.querySelector(".playerResult")
let computerScore = document.querySelector(".computerResult")
let player = 0;
let computer = 0


myOptions.forEach(element => {

    if (window.innerWidth <= 425) {

        element.addEventListener("click", (e) => {
            element.style.position = "fixed"
            element.style.width = "30%"
            element.style.left = "35%"
            element.style.bottom = "25%"
            element.classList.add("myChoice")
            myOptions.forEach(e => {
                if (!e.classList.contains("myChoice")) {
                    e.style.display = "none"
                }
            });
            computerTurn(element)
        })

    } else {
        element.addEventListener("click", (e) => {
            element.style.position = "fixed"
            element.style.width = "10%"
            element.style.left = "30%"
            element.style.top = "40%"
            element.classList.add("myChoice")
            myOptions.forEach(e => {
                if (!e.classList.contains("myChoice")) {
                    e.style.display = "none"
                }
            });
            computerTurn(element)
        })
    }
});

function computerTurn(myChoice) {
    let element = computerOptions[Math.round(Math.random() * (computerOptions.length - 1))];

    if (window.innerWidth <= 425) {

        element.style.position = "fixed"
        element.style.width = "30%"
        element.style.left = "35%"
        element.style.top = "25%"
        element.classList.add("computerChoice")
        computerOptions.forEach(e => {
            if (!e.classList.contains("computerChoice")) {
                e.style.display = "none"
            }
        }) 

    } else {
        element.style.position = "fixed"
        element.style.width = "10%"
        element.style.right = "30%"
        element.style.top = "40%"
        element.classList.add("computerChoice")
        computerOptions.forEach(e => {
            if (!e.classList.contains("computerChoice")) {
                e.style.display = "none"
            }
        })
    }
    win(myChoice, element)
}

function win(myChoice, computerChoice) {
    let myChance = myChoice.getAttribute("id")
    let computerChance = computerChoice.getAttribute("id")
    let state;
    if (myChance == computerChance) {
        state = "tie"
    } else {
        switch (myChance) {
            case "rock":
                if (computerChance == "scissor") {
                    state = "player win"
                    setTimeout(() => {
                        myChoice.style.scale = "1.5"
                        computerChoice.style.opacity = "0.5"
                    }, 1000);
                } else if (computerChance == "paper") {
                    state = "computer win"
                    setTimeout(() => {
                        computerChoice.style.scale = "1.5"
                        myChoice.style.opacity = "0.5"

                    }, 1000);
                }

                break;
            case "paper":
                if (computerChance == "rock") {
                    state = "player win"
                    setTimeout(() => {
                        myChoice.style.scale = "1.5"
                        computerChoice.style.opacity = "0.5"
                    }, 1000);
                } else if (computerChance == "scissor") {
                    state = "computer win"
                    setTimeout(() => {
                        computerChoice.style.scale = "1.5"
                        myChoice.style.opacity = "0.5"

                    }, 1000);
                }

                break;
            case "scissor":
                if (computerChance == "paper") {
                    state = "player win"
                    setTimeout(() => {
                        myChoice.style.scale = "1.5"
                        computerChoice.style.opacity = "0.5"
                    }, 1000);
                } else if (computerChance == "rock") {
                    state = "computer win"
                    setTimeout(() => {
                        computerChoice.style.scale = "1.5"
                        myChoice.style.opacity = "0.5"

                    }, 1000);
                }

                break;

            default:
                break;
        }
    }
    setTimeout(() => {
        winning(state)
    }, 2000);
}
function winning(state) {

    switch (state) {
        case "player win":
            player++
            console.log(player);
            playerScore.textContent = player
            break;
        case "computer win":
            computer++
            computerScore.textContent = computer
            break;
    }

    myOptions.forEach(element => {

        if (window.innerWidth <= 425) {

            element.style.display = "initial"
            element.style.position = "static"
            element.style.opacity = "1"
            element.style.scale = "1"
            element.style.width = "20%"
            element.classList.remove("myChoice")

        } else {
            element.style.display = "initial"
            element.style.position = "static"
            element.style.opacity = "1"
            element.style.scale = "1"
            element.style.width = "35%"
            element.classList.remove("myChoice")
        }
    });


    computerOptions.forEach(e => {
        if (window.innerWidth <= 425) {

            e.style.display = "initial"
            e.style.position = "static"
            e.style.width = "20%" 
            e.style.opacity = "1"
            e.style.scale = "1"
            e.classList.remove("computerChoice")

        } else {
            e.style.display = "initial"
            e.style.position = "static"
            e.style.width = "35%"
            e.style.opacity = "1"
            e.style.scale = "1"
            e.classList.remove("computerChoice")

        }
    })



}