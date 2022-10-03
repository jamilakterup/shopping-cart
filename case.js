function NumberUpdate(isIncrease) {
    const addInputField = document.getElementById('case-input-field');
    const addInputFieldString = addInputField.value;
    const inputField = parseInt(addInputFieldString);

    let numberIncrease;

    if (isIncrease === true) {
        numberIncrease = inputField + 1;
    } else {
        numberIncrease = inputField - 1;
    }
    addInputField.value = numberIncrease;
    return numberIncrease;
}


function totalPriceUpdate(totalPrice) {
    const price = totalPrice * 59;

    const casePriceIncrease = document.getElementById('case-price');
    casePriceIncrease.innerText = price;



}

document.getElementById('increase-case-btn').addEventListener('click', function () {
    const totalPrice = NumberUpdate(true);

    totalPriceUpdate(totalPrice);


})

document.getElementById('decrees-case-btn').addEventListener('click', function () {
    const totalPrice = NumberUpdate(false);

    totalPriceUpdate(totalPrice);


})