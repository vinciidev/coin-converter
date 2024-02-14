let selectElement = document.getElementById('coinSelectOne');
let selectedCurrency;
let amount = parseFloat(document.getElementById('valueOne').value);

selectElement.addEventListener('change', function() {
    selectedCurrency = this.value;
    console.log('Moeda selecionada:', selectedCurrency);

})

