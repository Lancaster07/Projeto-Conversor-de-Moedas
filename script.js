const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,CAD-BRL,GBP-BRL").then(response => response.json())

const dolarToday = data.USDBRL.high
const libraToday = data.GBPBRL.high
const dolarCanadenseToday = data.CADBRL.high
const bitcoinToday = data.BTCBRL.high
const euroToday = data.EURBRL.high

console.log(data)


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "cad") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("in-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue / dolarCanadenseToday)
    }

    if (currencySelect.value == "gbp") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "btc") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}


function changeCurrency(){
const currencyName = document.getElementById("currency-name")
const currencyImage = document.querySelector(".image-1")
const currencyValue = document.querySelector(".currency-value")

if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/usa.png"
    currencyValue.innerHTML = "$ 0,00"
}

if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
    currencyValue.innerHTML = "€ 0,00"
}

if (currencySelect.value == "cad") {
    currencyName.innerHTML = "Dólar Canadense"
    currencyImage.src = "./assets/canada.avif"
    currencyValue.innerHTML = "CA$ 0,00"
}

if (currencySelect.value == "gbp") {
    currencyName.innerHTML = "Libra Esterlina"
    currencyImage.src = "./assets/libra.png"
    currencyValue.innerHTML = "£ 0,00"
}

if (currencySelect.value == "btc") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin.png"
    currencyValue.innerHTML = "₿ 0,00"
}

convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)