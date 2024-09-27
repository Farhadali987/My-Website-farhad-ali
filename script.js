
// Add event listener to buy now buttons
document.addEventListener("DOMContentLoaded", () => {
	const buyNowButtons = document.querySelectorAll(".product button");
	
	buyNowButtons.forEach((button) => {
		button.addEventListener("click", () => {
			alert("Thank you for your purchase!");
		});
	});
});
