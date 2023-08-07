/**
 * @description - Returns cleared fields
 */
function clearFields() {

    document.getElementById('yourBill').value = "";
    document.getElementById('tipInput').value = 0;
    document.getElementById('splitInput').value = 0;
    document.getElementById('tipPercent').innerHTML = '0%';
    document.getElementById('tipValue').innerHTML = '';
    document.getElementById('totalWithTip').innerHTML = '';
    document.getElementById('splitValue').innerHTML = '';
    document.getElementById('billEach').innerHTML = '';


}

/**
 * @description - Returns numbers formatted to two decimal places and round up the value
 * @param {*} formatDecimal 
 * @returns - Returns numbers formatted.
 */
function formatNumber(formatDecimal) {

    var regex = /(\d)(?:(?=\d+(?=[^\d.]))(?=(?:[0-9]{3})+\b)|(?=\d+(?=\.))(?=(?:[0-9]{3})+(?=\.)))/;

    formatDecimal = Math.ceil(formatDecimal * 100) / 100; //Rounding
    formatDecimal = formatDecimal.toFixed(2).replaceAll('.', ','); // Fix two decimal and change to comma
    formatDecimal = formatDecimal.replace(regex, "$1.");
    return 'R$ ' + formatDecimal;

}

/**
 * @description - Returns plural or singular depending on the quantity
 * @param {*} person 
 * @returns - Returns plural or singular.
 */
function formatPerson(person) {
    if (person <= 1) {
        return ' Pessoa ' + person;
    }
    return person + ' Pessoas';

}

/**
 * @description - Get HTML value, perform the calculation and return on the screen
 * @param {*}
 */
function update() {

    var bill = Number(document.getElementById('yourBill').value); // Total account amount
    var selectTipPercent = document.getElementById('tipInput').value; // Percentage made available
    var splitPerson = document.getElementById('splitInput').value; // Divided by person

    var tipValue = bill * (selectTipPercent / 100);
    var billTotal = bill + tipValue;
    var billEach = billTotal / splitPerson;
    document.getElementById('tipPercent').innerHTML = selectTipPercent + '%';
    document.getElementById('tipValue').innerHTML = formatNumber(tipValue);
    document.getElementById('totalWithTip').innerHTML = formatNumber(billTotal);
    document.getElementById('splitValue').innerHTML = formatPerson(splitPerson);
    document.getElementById('billEach').innerHTML = formatNumber(billEach);


}

