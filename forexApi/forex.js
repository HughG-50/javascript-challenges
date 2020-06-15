//Simple API for displaying the exchange rate between the base pair of USD or EUR against other currencies

// const publicEndpoint = 'https://open.exchangerate-api.com/v6/latest'
// const freeEndPoint = `https://v6.exchangerate-api.com/v6/ea62ff5ffc1dfea118f56539/latest/${basePair}`

//REMEMBER THAT FETCHING FROM API IS ASYNC - NEED TO WAIT FOR DATA TO ARRIVE TO HAVE OUR OBJECT WITH DATA IN IT
//better to use async await than chaining .thens in this case - i.e. tell JS to wait until async code is finished

// function getExchangeRate() {
//     fetch(freeEndPoint)
//     .then(response => response.json())
//     .then(data => {
//         //console.log(data)
//         console.log(data.base_code)
//         console.log(data.conversion_rates)
//     })
//     .catch(err => console.log(err));
// }

// Refactor to use async await for fetching from API
async function getExchangeRate(basePair) {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/ea62ff5ffc1dfea118f56539/latest/${basePair}`);
    const exchangeData = await response.json();
    const exchangeRates = exchangeData.conversion_rates;
    // console.log(exchangeData);
    console.log(exchangeRates);
} 

let basePair = 'USD';
getExchangeRate(basePair)
