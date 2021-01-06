const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap');


function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    
    fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const exchangeRate = data.rates[currency_two];
            rateEl.innerText = `1 ${currency_one} = ${exchangeRate} ${currency_two}`;
            amountEl_two.value = (amountEl_one.value * exchangeRate).toFixed(2);
    })
}


function swapIt() {
    let currency_one = currencyEl_one.value;

    let temp = currency_one;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;

    calculate();

}

currencyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
amountEl_two.addEventListener('input', calculate);
swap.addEventListener('click', swapIt);
calculate();