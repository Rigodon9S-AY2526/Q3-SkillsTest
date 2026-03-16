const ticketPrice = 250;
const adminFee = 50;

function displayPayment() {

    let quantity = document.getElementById("ticketQty").value; 
    quantity = Number(quantity);

    let subtotal = quantity * ticketPrice;
    let total = subtotal + adminFee;

    document.getElementById("subtotal").value = "₱" + subtotal;
    document.getElementById("adminFee").value = "₱" + adminFee;
    document.getElementById("totalPrice").value = "₱" + total;
}
