const body = document.querySelector("body")


const tilmer = document.createElement("div")

const seconde = document.createElement("div")
const miNute = document.createElement("div")

let player = document.createElement("div")
player.className = "laBouleMagique"

tilmer.className = "tilmer"

let sec = 0;
let minute = 0;
let timetime = setInterval(function () {
    sec++;
    miNute.innerHTML = minute
    seconde.innerHTML = ":" + sec;
    if (sec == 60) {
        sec = 0;
        minute++  
    }
    
}, 1000);
let lvl = 1;

    let multiline = ``;



    if (lvl == 0) {

        multiline = `***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********`;
    }
    if (lvl == 1) {
        multiline = `**********************
*..S.................*
********************.*
*....................*
*.********************
*...................T*`;
    }
    if (lvl == 2) {
        multiline = `********
****S***
****.***
****.***
****.***
*......*
*.****.*
*..***.*
*..***.*
**.*****
*T.*****
********`;
    }
    let ligne = multiline.split("\n");
    body.style.width = (50 * ligne[0].length) + "px"; // Largeur du body 

let stockPosX = 0;
let stockPosY = 0;
let stockTresorY = 0
let stockTresorX = 0
 


for (let i = 0; i < ligne.length; i++) {
    const line = document.createElement("div")
    line.className = "ligneEtColone"

    for (let u = 0; u < ligne[0].length; u++) {

        const tile = document.createElement("div")
        const caracter = ligne[i]
        tile.innerHTML = caracter[u]
        line.appendChild(tile)
        console.log("lvl", lvl, line[i], "div", tile[u]);
        if (tile.innerHTML == "*") {
            tile.className = "mur"
            tile.innerHTML = ""
        }
        if (tile.innerHTML == ".") {
            tile.className = "chemin"
            tile.innerHTML = ""

        }
        if (tile.innerHTML == "S") {
            tile.className = "start"
            tile.innerHTML = ""
            stockPosX = caracter.indexOf("S")
            console.log("poxX", u);
            stockPosY = i

            console.log(stockPosX, stockPosY);

        }
        if (tile.innerHTML == "T") {
            tile.className = "tresorDeChocopops"
            tile.innerHTML = ""
            stockTresorX = caracter.indexOf("S")
            stockTresorY = i
        }

    }

    body.appendChild(line)
}


let posY = 0;
let posX = 0;

posY += stockPosY + 3
posX += stockPosX + 1





let posY_tresor = 0;
let posX_tresor = 0;
posY_tresor += stockTresorY + 3
posX_tresor += stockTresorX + 1

document.querySelector("body > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)

const moove = document.addEventListener("keydown", function (e) {


    if (e.code == "ArrowRight") {
        posX++
        if (document.querySelector("body > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("mur")) {
            posX--
            document.querySelector("body > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
        } else {
            document.querySelector("body > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
        }
    }
    if (e.code == "ArrowLeft") {
        posX--
        if (document.querySelector("body > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("mur")) {
            posX++
            document.querySelector("body > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
        } else {
            document.querySelector("body > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
        }
    }

    if (e.code == "ArrowDown") {


        if (posY <= ligne.length+1) {

            posY++
            console.log(posY);
            if (document.querySelector("body > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("mur")) {
                posY--
                document.querySelector("body > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
            } else {
                document.querySelector("body > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
            }
        }
    }


    if (e.code == "ArrowUp") {

        if (posY >= 4) {

            posY--
            console.log(posY);
            if (document.querySelector("body > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("mur")) {
                posY++
                document.querySelector("body > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
            } else {
                document.querySelector("body > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
            }
        }
    }

    if (document.querySelector("body > div:nth-child(" + posY_tresor + ") > div.tresorDeChocopops > div")) {
        alert("ouep")
        window.location= ""
        lvl++
        belek()
        // body.innerHTML = ""
        console.log("posY->", posY);
    }
})

body.appendChild(tilmer)
tilmer.appendChild(miNute)
tilmer.appendChild(seconde)

