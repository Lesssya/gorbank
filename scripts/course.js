let fromRuble = document.getElementById('input-from-ruble');
let toCrona = document.getElementById('input-to-crona');
let fromCrona = document.getElementById('input-from-crona');
let toRuble = document.getElementById('input-to-ruble');

document.getElementById('button-to').addEventListener('click', function() {
    toCrona.value = fx(fromRuble.value).from("RUB").to("CZK");
 });


 document.getElementById('button-from').addEventListener('click', function() {
    toRuble.value = fx(fromCrona.value).from("CZK").to("RUB");
 });