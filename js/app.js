/**
 * Project Name : Shoping Calculation with DOM
 * Author: Tushar Ahmmed
 */

//handle
const memoryBtnsParent = document.getElementById('memory-btns');
const storageBtnsParent = document.getElementById('storage-btns');
const deliveryBtnsParent = document.getElementById('shiping-parents');
const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const subTotal = document.getElementById('sub-total');
const total = document.getElementById('total');

//promo code
const submitBtn = document.getElementById('submit-promo');
const promoInput = document.getElementById('promo-code')


// functions

// get feature cost and update total
function getFeaturedCost(btnsParentId, costField) {
    if (event.target.parentNode.id == btnsParentId) {
        let price = event.target.getAttribute("cost");
        costField.innerText = price;
        calculateTotal();
    }
}

// calculate total value
function calculateTotal() {
    let netPrice = parseInt(bestPrice.innerText);
    let memoryPrice = parseInt(memoryCost.innerText);
    let storagePrice = parseInt(storageCost.innerText);
    let delivaryPrice = parseInt(deliveryCost.innerText);

    let subTotalValue = netPrice + memoryPrice + storagePrice + delivaryPrice;

    // set value
    subTotal.innerText = subTotalValue;
    total.innerText = subTotalValue;
}

// use promo code
function checkPromoCode(code) {
    if (code == 'stevekaku') {
        let currentTotal = parseInt(total.innerText);
        let bonusAmount = currentTotal * (20 / 100);
        let newTotal = currentTotal - bonusAmount;

        // set total
        total.innerText = newTotal;

        // disble input stauts
        let status = document.createAttribute('disabled');
        promoInput.setAttributeNode(status);
    }
}



// events

//memory buttons event
memoryBtnsParent.addEventListener('click', function (event) {
    // get memory cost and update total
    getFeaturedCost('memory-btns', memoryCost);
})


// storage event
storageBtnsParent.addEventListener('click', function (event) {
    // get storage cost and update total
    getFeaturedCost('storage-btns', storageCost);
})

// delivary shiping event
deliveryBtnsParent.addEventListener('click', function (event) {
    // get delivery cost and update total
    getFeaturedCost('shiping-parents', deliveryCost);
})

// promo code event
submitBtn.addEventListener('click', function (event) {
    // form reload false
    event.preventDefault();
    // code
    let promoCode = promoInput.value;
    // check code
    checkPromoCode(promoCode);
    // clear field
    promoInput.value = '';
})