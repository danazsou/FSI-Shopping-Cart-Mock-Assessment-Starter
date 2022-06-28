// This code will be for quanity display
function updateQuantity(displayQuantity) {
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = displayQuantity 
}

// Start quantity at 1 since product is in cart
let quantity = 1

// Buttons
const quantDown = document.querySelector('#quantity-down')
const quantUp = document.querySelector('#quantity-up')

// decreasing quantity event listener note --
quantDown.addEventListener('click', function(e){
    if (quantity > 0) {
        quantity--
    }
    updateQuantity(`Quantity: ${quantity}`)
})

// increase quantity event listener 
quantUp.addEventListener('click', function(){
    quantity++
    updateQuantity(`Quantity: ${quantity}`)
})