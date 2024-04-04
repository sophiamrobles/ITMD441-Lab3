const billTotal = document.getElementById('billTotal');
const tipSlider = document.getElementById('tipSlider');
const tipPercentage = document.getElementById('tipPercentage');
const tipAmount = document.getElementById('tipAmount');
const totalBillWTip = document.getElementById('totalBillWTip');

document.getElementById('calcTip').addEventListener('input', function(){
    const billTotal = parseFloat(billTotal.value);
    const tipPercentage = parseFloat(tipSlider.value);

    if (isNaN(billTotal)){
        alert('Please enter a numerical value for bill total.');
        return;
    }

    const tipAmount = (billTotal*tipPercentage/100);
    const totalBillWTip = billTotal + tipAmount;
    tipPercentage.value = tipPercentage + "%";
    tipAmount.value = tipAmount.toFixed(2);
    totalBillWTip = totalBillWTip.toFixed(2);
});