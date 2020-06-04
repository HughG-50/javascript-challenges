//Simple API for displaying the exchange rate between the base pair of USD or EUR against other currencies

const publicEndpoint = 'https://open.exchangerate-api.com/v6/latest'
const freeEndpoint = `https://v6.exchangerate-api.com/v6/ea62ff5ffc1dfea118f56539/latest/USD`

function getExchangeRate() {
    fetch(freeEndpoint)
    .then(response => console.log(response.data))
    .catch(err => console.log(err));
}

getExchangeRate()