function displayPayment() {
    // variable declaration
    const TICKET_PRICE = 250.00;
    const ADMIN_FEE = 50;
    let ticketQty = Math.abs(Number(document.getElementById("ticketQty").value));
    let subtotal = TICKET_PRICE * ticketQty;
    let totalPrice = subtotal + ADMIN_FEE;

    // displaying output
    Number(document.getElementById("subtotal").value = subtotal.toFixed(2));
    document.getElementById("totalPrice").innerHTML = "Total Price: $" + totalPrice.toFixed(2);

    }