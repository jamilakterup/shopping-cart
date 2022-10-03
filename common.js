
function totalUpdate(elementId) {
    const phoneTotalPrice = document.getElementById(elementId);
    const phoneTotalPriceString = phoneTotalPrice.innerText;
    const phoneTotal = parseInt(phoneTotalPriceString);
    return phoneTotal;
}

function setTextElementValueById(elementId, value) {
    const subTotal = document.getElementById(elementId);
    subTotal.innerText = value;
}


function calculateSubTotal() {
    const phoneUpdatePrice = totalUpdate('phone-price');
    const caseTotalUpdatePrice = totalUpdate('case-price');

    const currentSubTotal = phoneUpdatePrice + caseTotalUpdatePrice;
    setTextElementValueById('sub-total', currentSubTotal);

    const tax = (currentSubTotal * 0.05).toFixed(2);
    const taxAmount = parseFloat(tax);
    setTextElementValueById('sub-total-tax', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('total', finalAmount);
}


