//Simple API for displaying the exchange rate between the base pair of USD or EUR against other currencies

// const publicEndpoint = 'https://open.exchangerate-api.com/v6/latest'
// const freeEndPoint = `https://v6.exchangerate-api.com/v6/ea62ff5ffc1dfea118f56539/latest/${basePair}`

//REMEMBER THAT FETCHING FROM API IS ASYNC - NEED TO WAIT FOR DATA TO ARRIVE TO HAVE OUR OBJECT WITH DATA IN IT
//better to use async await than chaining .thens in this case - i.e. tell JS to wait until async code is finished

const basePair = document.querySelector("#base-pair")
const displayChoice = document.querySelector("#display-choice")

const usdRate = document.querySelector("#usd-rate")
const eurRate = document.querySelector("#eur-rate")
const audRate = document.querySelector("#aud-rate")
const cadRate = document.querySelector("#cad-rate")
const chfRate = document.querySelector("#chf-rate")
const gbpRate = document.querySelector("#gbp-rate")
const jpyRate = document.querySelector("#jpy-rate")
const nzdRate = document.querySelector("#nzd-rate")

// Refactor to use async await for fetching from API
async function getExchangeRate() {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/ea62ff5ffc1dfea118f56539/latest/${basePair.value}`);
    const exchangeData = await response.json();
    // console.log(exchangeData);
    const exchangeRates = exchangeData.conversion_rates;
    console.log(exchangeRates);

    const currentUsdRate = exchangeRates.USD;
    const currentEurRate = exchangeRates.EUR;
    const currentAudRate = exchangeRates.AUD;
    const currentCadRate = exchangeRates.CAD;
    const currentChfRate = exchangeRates.CHF;
    const currentGbpRate = exchangeRates.GBP;
    const currentJpyRate = exchangeRates.JPY;
    const currentNzdRate = exchangeRates.NZD;

    usdRate.innerHTML = `USD: ${currentUsdRate}`
    eurRate.innerHTML = `EUR: ${currentEurRate}`
    audRate.innerHTML = `AUD: ${currentAudRate}`
    cadRate.innerHTML = `CAD: ${currentCadRate}`
    chfRate.innerHTML = `CHF: ${currentChfRate}`
    gbpRate.innerHTML = `GBP: ${currentGbpRate}`
    jpyRate.innerHTML = `JPY: ${currentJpyRate}`
    nzdRate.innerHTML = `NZD: ${currentNzdRate}`
} 

// basePair.addEventListener("select", getExchangeRate);
basePair.addEventListener("change", getExchangeRate);

// let basePair = "USD"
getExchangeRate()