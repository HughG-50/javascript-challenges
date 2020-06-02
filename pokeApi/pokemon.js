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