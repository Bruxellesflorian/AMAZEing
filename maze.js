
const body = document.querySelector("body")
//


let lvl = 1;
let multiline = `***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********
`
// function nouvMap(){
//     if (lvl ==0){
//         let multiline = `***********.*
//         *S.....**.*.T
//         *****.....*.*
//         *****.***.*.*
//         *****.*****.*
//         *****.*****.*
//         *****.......*
//         *****.*******
//         *.........***
//         *.******...**
//         *....********`   
//     }
//     if(lvl == 1){
//         multiline = `**********************
//         *..S.................*
//         ********************.*
//         *....................*
//         *.********************
//         *...................T*
//         `}
//         if(lvl == 2){
//             `********
//             ****S***
//             ****.***
//             ****.***
//             ****.***
//             *......*
//             *.****.*
//             *..***.*
//             *..***.*
//             **.*****
//             *T.*****
//             ********
//             `
//         }
// }


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
const player = document.createElement("div")
player.className = "laBouleMagique"


let posY = 0;
posY += stockPosY+3
let posX = 0;
posX += stockPosX+1

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
            lvl++
            console.log(lvl);
            alert("OKAY")
            window.location=""
            nouvMap()
        }
        
        //________________________________________________Phase de test Stop limit de map
        // console.log("positionY:",posY)  
        // console.log("(ligne[0].length+posY)",ligne[0].length-posY) 
        // console.log('(ligne.length)',ligne.length);
        
})
