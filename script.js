function convertValue() {
    let amount = parseFloat(document.getElementById('firstCoin').value);
    let coinOne = document.getElementById('coinSelectOne').value
    let coinTwo = document.getElementById('coinSelectTwo').value

    const rates = {
        'USD': {
            'USD': 1,
            'BRL': 5.25,
            'JPY': 109.63,
            'GBP': 0.72,
            'BTC': 0.000026
        },
        'BRL': {
            'USD': 0.19,
            'BRL': 1,
            'JPY': 20.81,
            'GBP': 0.14,
            'BTC': 0.0000049
        },
        'JPY': {
            'USD': 0.0091,
            'BRL': 0.048,
            'JPY': 1,
            'GBP': 0.0065,
            'BTC': 0.00000023
        },
        'GBP': {
            'USD': 1.39,
            'BRL': 7.01,
            'JPY': 153.32,
            'GBP': 1,
            'BTC': 0.000036
        },
        'BTC': {
            'USD': 38378.6,
            'BRL': 202999.36,
            'JPY': 4425161.74,
            'GBP': 27579.66,
            'BTC': 1
        }
    };

    const convertedAmount = amount * rates[coinOne][coinTwo];

    document.getElementById('secondCoin').value = convertedAmount.toFixed(2);
}


