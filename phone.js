function inputUpdate(isIncrease) {
    const inputFieldSelect = document.getElementById('input-field')
    const inputFieldString = inputFieldSelect.value;
    const inputFieldNumber = parseInt(inputFieldString);


    let increaseNumber;

    if (isIncrease === true) {
        increaseNumber = inputFieldNumber + 1;
    } else {
        increaseNumber = inputFieldNumber - 1;
    }

    inputFieldSelect.value = increaseNumber;

    return increaseNumber;
}


function priceUpdate(increasePrice) {
    const totalPhonePrice = increasePrice * 1219;

    const phonePriceGet = document.getElementById('phone-price');
    phonePriceGet.innerText = totalPhonePrice;

}

document.getElementById('increase-btn').addEventListener('click', function () {
    const increasePrice = inputUpdate(true);

    priceUpdate(increasePrice)


})

document.getElementById('decrees-btn').addEventListener('click', function () {
    const increasePrice = inputUpdate(false);

    priceUpdate(increasePrice)


})
