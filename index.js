const game = document.querySelector(".game");

const player = document.createElement("div");

let initialPosition = 70;

player.style.width = "50px";
player.style.height = "50px";
player.style.backgroundColor = "red";
player.style.position = "relative";
player.style.top = "350px"
player.style.left = initialPosition + "px";

game.appendChild(player);

document.addEventListener("keydown", playerMovement);

function playerMovement(e) {
    switch (e.key) {
        case "a":
            console.log("left")
            initialPosition = initialPosition - 210;
            player.style.left = initialPosition + "px";
            break;

        case "d":
            console.log("right")
            initialPosition = initialPosition + 210;
            console.log(initialPosition)
            player.style.left = initialPosition + "px";
            break;

    }


}