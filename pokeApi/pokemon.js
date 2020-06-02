function makeGetRequest(theUrl, callback){
  const request = new XMLHttpRequest();
  request.open("GET", theUrl, true);
  request.onload = (res) => callback(res.currentTarget.responseText)
  request.send();
}

// makeGetRequest(
//     'https://pokeapi.co/api/v2/pokemon/ditto', 
//     (data) => {
//         const pokemonObject =  JSON.parse(data)    
//         console.log(pokemonObject)
//     }
// )

function getPokemonStats(pokemonName, callback){
    makeGetRequest(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
        (data) => {
            const pokemonData = JSON.parse(data)
            const statsArray = []
            for(pokemonStat of pokemonData.stats){
                statsArray.push(
                    {name: pokemonStat.stat.name, baseStat: pokemonStat.base_stat}
                )
            }
            callback(statsArray)
        }
    )
}

getPokemonStats('ditto', (statsArray) => {
    console.log(statsArray)
})

//data is only available within the callback function, hence to get pokemon2 accessible it needs to be within the other callback
function whichPokemonIsHeavier(pokemonName1, pokemonName2, callback){
    makeGetRequest(`https://pokeapi.co/api/v2/pokemon/${pokemonName1}`,
        (rawPokemonData) => {
            const pokemonData1 = JSON.parse(rawPokemonData)
            //console.log(pokemonData1)
            
            makeGetRequest(`https://pokeapi.co/api/v2/pokemon/${pokemonName2}`,
                //only in this callback do we have access to both of those pokemonData's
                (rawPokemonData2) => {
                    const pokemonData2 = JSON.parse(rawPokemonData)
                    console.log(pokemonData1, pokemonData2)
                    if(pokemonData1.weight > pokemonData2.weight){
                        callback(`${pokemonData1.name} is ${pokemonData1.weight - pokemonData2.weight}kg heavier `)
                    } else if (pokemonData1.weight < pokemonData2.weight){
                        callback(`${pokemonData2.name} is ${pokemonData2.weight - pokemonData1.weight}kg heaver `)
                    } else {
                        callback(`${pokemonData1.name} and ${pokemonData2.name} are the same weight `)
                    }
                }
            )
        }
    )
    console.log("Here")
}

whichPokemonIsHeavier('ditto', 'charmander', (weightDescription) => {
    console.log(weightDescription)
})