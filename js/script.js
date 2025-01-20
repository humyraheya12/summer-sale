const productCards = document.querySelectorAll(".product-card")
const selectedItems = document.getElementById("selectedItems")
const totalPriceEl = document.getElementById("totalPrice")
const discountPriceEl = document.getElementById("discountPrice")
const finalPriceEl = document.getElementById("total")
const promoCodeBtn = document.getElementById("promoCodeBtn")


let totalPrice = 0;
let discount = 0;
// add eventlistener to product cards
productCards.forEach(card => {
    card.addEventListener("click", () => {
        const name = card.getAttribute("data-name");
        const price = parseFloat(card.getAttribute("data-price"));
        const listItem = document.createElement("li")
        listItem.textContent = `${name} - $${price}`;
        selectedItems.appendChild(listItem);
        totalPrice += price;
        totalPriceEl.textContent = totalPrice.toFixed(2);
    updateFinalPrice();
    })
})

// promocode application
promoCodeBtn.addEventListener("click", () => {
    if(totalPrice >= 200){
        discount = totalPrice * 0.2;
        discountPriceEl.textContent = discount.toFixed(2);
       updateFinalPrice() 
    }
    else{
        alert("You need to spend at least $200 to use the promo code!");
    }
})
// final price
function updateFinalPrice(){
    const finalPrice = totalPrice - discount;
    finalPriceEl.textContent = finalPrice.toFixed(2);
}