function addToCart(productName, price) {
    alert(`${productName} has been added to your cart at Rs.${price.toFixed(2)}`);
}

// Example function for handling form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 0);
})