const addInputsButton = document.getElementById("addInputs");
const divMaterial = document.getElementById("inputs");

addInputsButton.addEventListener("click", newInputs);

function newInputs() {
  let quantity = document.querySelectorAll(".quantity");
  let quantityCount = quantity.length + 1;
  let price = document.querySelectorAll(".price");
  let priceCount = price.length + 1;

  divMaterial.innerHTML += `
        <div class="material">
            <input type="number" id="quantity${quantityCount}" class="quantity">
            <input type="number" id="price${priceCount}" class="price">
        </div>  
    `;
}
