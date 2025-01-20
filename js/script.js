const productCards = document.querySelectorAll(".product-card")
const selectedItems = document.getElementById("selectedItems")
const totalPriceEl = document.getElementById("totalPrice")
const discountPriceEl = document.getElementById("discountPrice")
const finalPriceEl = document.getElementById("total")
const promoCodeBtn = document.getElementById("promoCodeBtn")
const couponInput = document.querySelector("input[placeholder='Discount']"); // The coupon input field
const couponApplyBtn = document.querySelector(".btn.bg-pink-500.rounded-l-none"); // Apply button



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

// Promo code application for the coupon input
couponApplyBtn.addEventListener("click", () => {
    const inputCode = couponInput.value.trim().toUpperCase();
    if (inputCode === "SELL 200" && totalPrice >= 200) {
        alert("Coupon code applied successfully!");
        updateFinalPrice();
    } else {
        alert("Invalid code or total is less than $200.");
    }
});

// promocode application
promoCodeBtn.addEventListener("click", () => {
    if (totalPrice >= 200) {
        alert("Promo code applied! You received a 20% discount.");
        updateFinalPrice();
    } else {
        alert("Spend at least $200 to use this promo code.");
    }
});
// final price
function updateFinalPrice() {
    const discountAmount = (totalPrice >= 200) ? totalPrice * 0.2 : 0; // Apply 20% discount if eligible
    discountPriceEl.textContent = discountAmount.toFixed(2);
    const finalPrice = totalPrice - discountAmount;
    finalPriceEl.textContent = finalPrice.toFixed(2);
}