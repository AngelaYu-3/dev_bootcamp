const httpAdd = "https://pokeapi.co/api/v2/pokemon/"

//key-value pair for type color
const colorType = {
    normal: "A8A77A",
    fire: "EE8130",
    water: "6390F0",
    electric: "F7D02C",
    grass: "7AC&4C",
    ice: "96D9D6",
    fighting: "C22E28",
    poison: "A33EA1",
    ground: "E2BF65",
    flying: "A98FF3",
    psychic: "F95587",
    bug: "A6B91A",
    rock: "B6A136",
    ghost: "73f797",
    dragon: "6F35Fc",
    dark: "705746",
    steel: "B7B7CE",
    fairy: "D685AD"
};

// global variables 
let pokeNum = 1
let isInfo = true
let isMoves = false

// main async / Promise function
async function getPokemonData(pokeNum) {
    // fetching
    const response = await fetch(httpAdd + pokeNum)
    const data = await response.json()

    // getting all needed data
    let name = data["name"]
    let image = data["sprites"]["other"]["official-artwork"]["front_default"]
    let moves = data["moves"]
    let types = data["types"]
    let height = "height: " + ((data["height"] * 0.1).toFixed(1)) + "m\n"
    let weight = "weight: " + (data["weight"]) + "kg\n"
    let hp = "hp: " + data["stats"][0]["base_stat"] + "\n"
    let attack = "attack: " + data["stats"][1]["base_stat"]
    let defense = "defense: " + data["stats"][2]["base_stat"]
    let special_attack = "special-attack: " + data["stats"][3]["base_stat"]
    let special_defense = "special-defense: " + data["stats"][4]["base_stat"]
    let speed = "speed: " + data["stats"][5]["base_stat"]

    // adding pokemon name and image
    document.getElementById("nameButton").innerText = name
    document.getElementById("pokeImage").src = image

    // clearing prior type buttons and adding type buttons w/ appropriate colors
    document.getElementById("typeButtons").innerHTML = ""
    for(i = 0; i < types.length; i++){
        let name = types[i]["type"]["name"];
        document.getElementById("typeButtons").innerHTML += "<button style='background-color: #" + colorType[name] + ";'" + "id=typeButton>" + name + "</button>"
    }

    //Info + Moves button logic
    if(isInfo){
        // changing right header to info + adding necessary text
        document.getElementById("rightText").innerText = "info"
        addInfo(height, weight, hp, attack, defense, special_attack, special_defense, speed);

        // clearing scroll feature
        document.getElementById("moves").style.width = "0px"
        document.getElementById("moves").style.height = "0px"
        document.getElementById("moves").style.overflow = "normal"
    } else{
        // changing right header to moves + clearing prior info text
        document.getElementById("rightText").innerText = "moves"
        clearInfo();

        // clearing prior listed moves on right side + adding new moves for new pokemon
        document.getElementById("moves").innerHTML = ""
        for(i = 0; i < moves.length; i++){ 
            document.getElementById("moves").innerHTML += "<div>" + moves[i]["move"]["name"] + "</div>"
        }

        // adding scroll feature
        document.getElementById("moves").style.width = "300px"
        document.getElementById("moves").style.height = "550px"
        document.getElementById("moves").style.overflow = "auto"
    }
    
}

// buttons 
const arrowButton1 = document.getElementById("arrowButton1")
const arrowButton2 = document.getElementById("arrowButton2")
const infoButton = document.getElementById("infoButton")
const movesButton = document.getElementById("movesButton")
infoButton.textContent = "info"
movesButton.textContent = "moves"
getPokemonData(pokeNum)

// infoButton
infoButton.addEventListener("click", () => {
    isInfo = true
    isMoves = false
    document.getElementById("rightText").innerText = "info"
    infoButton.style.backgroundColor = 'lightGreen'
    movesButton.style.backgroundColor = 'lightgrey'
    getPokemonData(pokeNum)
});

// movesButton
movesButton.addEventListener("click", () => {
    isInfo = false
    isMoves = true

    document.getElementById("rightText").innerText = "moves"
    movesButton.style.backgroundColor = 'lightGreen'
    infoButton.style.backgroundColor = 'lightgrey'
    getPokemonData(pokeNum)
});

// backward arrowButton
arrowButton1.addEventListener("click", () => {
    --pokeNum
    if(pokeNum < 1) pokeNum = 905
    getPokemonData(pokeNum)
});

// forward arrowButton
arrowButton2.addEventListener("click", () => {
    ++pokeNum
    if(pokeNum > 905) pokeNum = 1
    getPokemonData(++pokeNum)
});

function clearInfo(){
    document.getElementById("height").innerText = ""
    document.getElementById("weight").innerText = ""
    document.getElementById("hp").innerText = ""
    document.getElementById("attack").innerText = ""
    document.getElementById("defense").innerText = ""
    document.getElementById("special_attack").innerText = ""
    document.getElementById("special_defense").innerText = ""
    document.getElementById("speed").innerText = ""
}

function addInfo(height, weight, hp, attack, defense, special_attack, special_defense, speed){
    document.getElementById("height").innerText = height
    document.getElementById("weight").innerText = weight
    document.getElementById("hp").innerText = hp
    document.getElementById("attack").innerText = attack
    document.getElementById("defense").innerText = defense
    document.getElementById("special_attack").innerText = special_attack
    document.getElementById("special_defense").innerText = special_defense
    document.getElementById("speed").innerText = speed
}