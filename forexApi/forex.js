//Simple API for displaying the exchange rate between the base pair of USD or EUR against other currencies


let basePair = 'USD';
// const publicEndpoint = 'https://open.exchangerate-api.com/v6/latest'
const freeEndPoint = `https://v6.exchangerate-api.com/v6/ea62ff5ffc1dfea118f56539/latest/${basePair}`

function getExchangeRate() {
    fetch(freeEndPoint)
    .then(response => response.json())
    .then(data => {
        //console.log(data)
        console.log(data.base_code)
        console.log(data.conversion_rates)
    })
    .catch(err => console.log(err));
}


//better to use async await than chaining .thens in this case - i.e. tell JS to wait until async code is finished
getExchangeRate()
