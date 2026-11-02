/* =========================================
   RATSHI'S EGGS AND CHICKEN
   PART 3 - JAVASCRIPT FORM VALIDATION
========================================= */


/* =========================================
   ENQUIRY FORM VALIDATION
========================================= */

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const enquiryType = document.getElementById("enquiryType").value;
        const message = document.getElementById("message").value.trim();

        const response = document.getElementById("enquiryResponse");

        if (name.length < 2) {
            response.textContent = "Please enter your full name.";
            response.style.color = "red";
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            response.textContent = "Please enter a valid email address.";
            response.style.color = "red";
            return;
        }

        if (!/^0[0-9]{9}$/.test(phone)) {
            response.textContent = "Please enter a valid 10-digit South African phone number.";
            response.style.color = "red";
            return;
        }

        if (enquiryType === "") {
            response.textContent = "Please select an enquiry type.";
            response.style.color = "red";
            return;
        }

        if (message.length < 10) {
            response.textContent = "Your enquiry must contain at least 10 characters.";
            response.style.color = "red";
            return;
        }

        response.textContent =
            "Thank you, " + name + "! Your enquiry has passed validation. We will process it once submission is connected.";

        response.style.color = "green";

    });

}


/* =========================================
   CONTACT FORM VALIDATION
========================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const phone = document.getElementById("contactPhone").value.trim();
        const messageType = document.getElementById("messageType").value;
        const message = document.getElementById("contactMessage").value.trim();

        const response = document.getElementById("contactResponse");

        if (name.length < 2) {
            response.textContent = "Please enter your full name.";
            response.style.color = "red";
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            response.textContent = "Please enter a valid email address.";
            response.style.color = "red";
            return;
        }

        if (!/^0[0-9]{9}$/.test(phone)) {
            response.textContent = "Please enter a valid 10-digit South African phone number.";
            response.style.color = "red";
            return;
        }

        if (messageType === "") {
            response.textContent = "Please select a message type.";
            response.style.color = "red";
            return;
        }

        if (message.length < 10) {
            response.textContent = "Your message must contain at least 10 characters.";
            response.style.color = "red";
            return;
        }

        response.textContent =
            "Thank you, " + name + "! Your message has passed validation.";

        response.style.color = "green";

    });

}
// PRODUCT SEARCH FUNCTION

const searchInput = document.getElementById("productSearch");
const clearButton = document.getElementById("clearSearch");

if (searchInput) {
    const products = document.querySelectorAll(".product-card");
    const resultsMessage = document.getElementById("searchResults");
    const noResults = document.getElementById("noResults");

    function searchProducts() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        let visibleProducts = 0;

        products.forEach(function(product) {
            const productInformation = product.textContent.toLowerCase();

            const imageAlt = Array.from(
                product.querySelectorAll("img")
            ).map(img => img.alt).join(" ").toLowerCase();

            const searchableText = productInformation + " " + imageAlt;

            if (searchableText.includes(searchTerm)) {
                product.style.display = "";
                visibleProducts++;
            } else {
                product.style.display = "none";
            }
        });

        if (resultsMessage) {
            resultsMessage.textContent =
                visibleProducts + " product(s) found.";
        }

        if (noResults) {
            noResults.style.display =
                visibleProducts === 0 ? "block" : "none";
        }
    }

    searchInput.addEventListener("input", searchProducts);

    if (clearButton) {
        clearButton.addEventListener("click", function() {
            searchInput.value = "";
            searchProducts();
            searchInput.focus();
        });
    }

    searchProducts();
}