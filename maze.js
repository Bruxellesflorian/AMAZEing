const body = document.querySelector("body")
let lvl = 0;
game()



function game(){
let multiline = ``

    if (lvl ==0){
        
        
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
*....********`   
    }
    if(lvl == 1){
        multiline = `**********************
*..S.................*
********************.*
*....................*
*.********************
*...................T*
`
}
    if(lvl == 2){
        multiline =`********
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
********
`}


let ligne = multiline.split("\n")
body.style.width = (50*ligne[0].length)+"px" // Largeur du body 

console.log("Ligne Y: ",ligne.length);
console.log("Ligne X: ",ligne[0].length);

let stockPosX = 0;
for (let i = 0;i<ligne.length-1; i++){
    const line = document.createElement("div")
    line.className = "ligneEtColone"
   
    for(let u = 0; u < ligne[0].length; u++){
        const tile = document.createElement("div")
        const caracter = ligne[i]
        tile.innerHTML = caracter[u]
        line.appendChild(tile)
        if(tile.innerHTML == "*"){
            tile.className = "mur"
            tile.innerHTML = ""
        }
        if(tile.innerHTML == "."){
            tile.className = "chemin"
            tile.innerHTML = ""

        }
        if(tile.innerHTML == "S"){
            tile.className = "start"
            tile.innerHTML = ""
            stockPosX =caracter.indexOf("S") 
            stockPosY = i
            console.log(stockPosX,stockPosY);
        }
        if(tile.innerHTML == "T"){
            tile.className = "tresorDeChocopops"
            tile.innerHTML = ""
            stockTresorX = caracter.indexOf("S") 
            stockTresorY = i
        }

    }
    
    body.appendChild(line)
}
let player = document.createElement("div")
player.className = "laBouleMagique"

let posY = 0;
let posX = 0;
posY += stockPosY+3
posX += stockPosX+1


if(lvl == 1) { posY -= 2;document.querySelector("body").removeChild(player)}

let posY_tresor=0;
let posX_tresor=0;
posY_tresor += stockTresorY+3
posX_tresor += stockTresorX+1

document.querySelector("body > div:nth-child("+posY+") > div:nth-child("+posX+")").appendChild(player)

const moove = document.addEventListener("keydown", function(e){
    
    if(e.code == "ArrowRight"){
          posX++                                                                        
        if(document.querySelector("body > div:nth-child("+posY+") > div:nth-child("+posX+")").classList.contains("mur")){
            posX--
            document.querySelector("body > div:nth-child("+posY+") > div:nth-child("+posX+")").appendChild(player)
        }else{
            document.querySelector("body > div:nth-child("+posY+") > div:nth-child("+posX+")").appendChild(player)
        }
    }
    if(e.code == "ArrowLeft"){
        posX--
        if(document.querySelector("body > div:nth-child("+posY+") > div:nth-child("+posX+")").classList.contains("mur")){
            posX++
            document.querySelector("body > div:nth-child("+posY+") > div:nth-child("+posX+")").appendChild(player)
        }else{
            document.querySelector("body > div:nth-child("+posY+") > div:nth-child("+posX+")").appendChild(player)
        }
    }
    if(e.code == "ArrowDown"){
        
        
        if(posY <= ligne.length){
            posY++
            console.log(posY);
        if(document.querySelector("body > div:nth-child("+posY+") > div:nth-child("+posX+")").classList.contains("mur")){
            posY--
            document.querySelector("body > div:nth-child("+posY+") > div:nth-child("+posX+")").appendChild(player)
        }else{
            document.querySelector("body > div:nth-child("+posY+") > div:nth-child("+posX+")").appendChild(player)
        }
    }
        }
        
    if(e.code == "ArrowUp"){

        if(posY >= 4){
            posY--
            console.log(posY);
        if(document.querySelector("body > div:nth-child("+posY+") > div:nth-child("+posX+")").classList.contains("mur")){
            posY++
            document.querySelector("body > div:nth-child("+posY+") > div:nth-child("+posX+")").appendChild(player)
        }else{
            document.querySelector("body > div:nth-child("+posY+") > div:nth-child("+posX+")").appendChild(player)
        }
        }
    }
        if(document.querySelector("body > div:nth-child("+posY_tresor+") > div.tresorDeChocopops > div")){
            document.querySelector("body > div:nth-child(4) > div.tresorDeChocopops").removeChild(player)
            lvl++
            body.innerHTML =""
            console.log("posY->",posY);
            game();
             
        }       
})}

