let purchaseCount = 0;

function addToCart() {
    // Update the purchase count
    purchaseCount++;
    
    // Update the displayed count in the HTML
    document.getElementById('count').textContent = purchaseCount;
    
    // You can add additional logic here, such as updating a shopping cart or showing a confirmation message.
}