form.addEventListener("change", calculate);

function calculate() {
  const materials = document.querySelectorAll(".material");
  const result = document.getElementById("result");
  const form = document.getElementById("form");
  const cashback = document.getElementById("cashback");

  let data = [];
  let cashbackValue = parseFloat(cashback.value) / 100;

  for (let material of materials) {
    data.push({
      count: +material.querySelector(".quantity").value,
      price: +material.querySelector(".price").value,
    });
  }

  let sum = 0;
  for (let material of data) {
    sum += material.count * material.price;
  }
  sum -= sum * cashbackValue;
  result.textContent = `Итого: ${sum.toFixed(2)}`;
}
