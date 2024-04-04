const billTotalInput = document.getElementById('billTotal');
const tipSlider = document.getElementById('tipSlider');
const tipPercentageInput = document.getElementById('tipPercentage');
const tipAmountInput = document.getElementById('tipAmount');
const totalBillWTipInput = document.getElementById('totalBillWTip');

document.getElementById('calcTip').addEventListener('input', function(){
    const billTotal = parseFloat(billTotalInput.value);
    const tipPercentage = parseFloat(tipSlider.value);

    if (isNaN(billTotal) || /\.\d{3,}/.test(billTotal)){
        alert('Please enter a numerical value with two decimal places for bill total.');
        return;
    }

    const calculatedTipAmount = (billTotal * tipPercentage / 100);
    const calculatedTotalBillWTip = billTotal + calculatedTipAmount;
    tipPercentageInput.value = tipPercentage + "%";
    tipAmountInput.value = calculatedTipAmount.toFixed(2);
    totalBillWTipInput.value = calculatedTotalBillWTip.toFixed(2);
});