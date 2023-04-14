const items = document.querySelectorAll(".item");
const result = document.getElementById("result");
const form = document.getElementById("form");
const cashback = document.getElementById("cashback");

form.addEventListener("change", calculate);

function calculate() {
    let data = [];
    let cashbackValue = parseFloat(cashback.value)/100
    
    for (let item of items) {
        data.push({
            count: parseInt(item.querySelector(".count").value),
            price: parseInt(item.querySelector(".price").value),
        });
    }

    let sum = 0;
    for (let item of data) {
        sum += item.count * item.price;
    }
    sum -= sum*cashbackValue
    result.textContent = `Итого: ${sum}`;

}