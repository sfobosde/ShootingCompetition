/// 220989.

/// Модуль на базе функции.
/// Функция с замыканием.
(function() {
    
    function getTestMessage() {
        return "test console print";
    }

    console.log(getTestMessage());
}());

function summator(number1) {
    return function(number2) {
        return number1 + number2;
    }
}

let sum = summator(9)(7);

let printSum = new Function('', 'console.log(sum)');

printSum();
