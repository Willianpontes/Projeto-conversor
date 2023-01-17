const button = document.getElementById('button-convert')
const select = document.getElementById('currency-select')

const dolar = 5.12
const euro = 5.9
const bit = 0.0000092

const dolarConvert = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
        }).format(inputReais)
    
    
    if(select.value === 'US$ Dólar americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
        }).format(inputReais / dolar)
    }

    if(select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
        }).format(inputReais / euro)
    }

    if(select.value === 'Bitcoin') {
        currencyValueText.innerHTML = new Intl.NumberFormat( {
        style: 'currency',
        currency: 'BRL'
        }).format(inputReais * bit)
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar americano') {
       currencyName.innerHTML = 'Dólar americano'
       currencyImg.src = './assets/estados-unidos (1) 1.png'
    }

    if (select.value === '€ Euro') {
    currencyName.innerHTML = 'Euro'
    currencyImg.src = './assets/img euro.png'
    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = "./assets/bitcoin.png"
        }

    dolarConvert()
}


button.addEventListener('click', dolarConvert)
select.addEventListener('change', changeCurrency)