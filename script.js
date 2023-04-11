const items = document.querySelectorAll(".item");
const result = document.getElementById("result");
const countButton = document.getElementById("count");

countButton.addEventListener("click", calculate);

function calculate() {
  let data = [];

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
  
  result.textContent = `Итого: ${sum}`;
}

let a = calculate;