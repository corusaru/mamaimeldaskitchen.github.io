let currentIndex = 1;
let isOnCooldown = false;
const slidesWrapper = document.querySelector('.slides-wrapper');
const totalSlides = document.querySelectorAll('.slideshow-image').length;

function showSlide() {
    slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function changeSlide(direction) {
    if (isOnCooldown) return; // If on cooldown, do nothing

    isOnCooldown = true; // Start cooldown
    currentIndex += direction;
    showSlide();

    // Disable arrow buttons visually
    document.querySelector('.prev').classList.add('disabled');
    document.querySelector('.next').classList.add('disabled');

    // Check if we need to loop
    setTimeout(() => {
        if (currentIndex === 0) {
            slidesWrapper.style.transition = 'none';
            currentIndex = totalSlides - 2;
            showSlide();
        } else if (currentIndex === totalSlides - 1) {
            slidesWrapper.style.transition = 'none';
            currentIndex = 1;
            showSlide();
        }
        
        setTimeout(() => {
            slidesWrapper.style.transition = 'transform 0.5s ease-in-out';
        }, 50);

        // End cooldown after 3 seconds
        setTimeout(() => {
            isOnCooldown = false;
            // Re-enable arrow buttons visually
            document.querySelector('.prev').classList.remove('disabled');
            document.querySelector('.next').classList.remove('disabled');
        }, 0);
    }, 500);
}

// Automatic slideshow
function autoSlide() {
    if (!isOnCooldown) {
        changeSlide(1);
    }
    setTimeout(autoSlide, 10000); // Adjusted to 10 seconds for better user experience
}

// Initialize
showSlide();
autoSlide();

function openGoogleMaps() {
    window.open("https://maps.app.goo.gl/CKSNAMFiqJYPHyZ59");
}



// Scroll to exact position for Products
document.getElementById("products-link").addEventListener("click", function(event) {
event.preventDefault(); // Prevent default behavior
window.scrollTo({
    top: 845, // Exact pixel position you want to scroll to
    behavior: "smooth" // Enables smooth scrolling
});
});

// Scroll to exact position for Location
document.getElementById("location-link").addEventListener("click", function(event) {
event.preventDefault();
window.scrollTo({
    top: 3650, // Adjust this value to the pixel position you want
    behavior: "smooth"
});
});

// Scroll to exact position for News
document.getElementById("news-link").addEventListener("click", function(event) {
event.preventDefault();
window.scrollTo({
    top: 4367, // Adjust this value to the pixel position you want
    behavior: "smooth"
});
});

// Scroll to exact position for About Us
document.getElementById("about-us-link").addEventListener("click", function(event) {
event.preventDefault();
window.scrollTo({
    top: 5160, // Adjust this value to the pixel position you want
    behavior: "smooth"
});
});


document.getElementById("search-input").addEventListener("keypress", function (event) {
if (event.key === "Enter") { // Check if the Enter key was pressed
    event.preventDefault(); // Prevent default form submission
    const searchTerm = event.target.value.toLowerCase(); // Get the search input value
    const productIds = {
        "tokneneng": "tokneneng",
        "fishball": "fishball",
        "chickenball": "chickenball",
        "squidball": "squidball",
        "siomai": "siomai",
        "turon": "turon"
    };

    // Check if the entered term matches any product name
    if (productIds[searchTerm]) {
        const productId = productIds[searchTerm];
        window.location.hash = "selection-products"; // Scroll to the products section
        highlightProduct(productId); // Highlight the product
    }
}
});

function highlightProduct(productId) {
const productElement = document.getElementById(productId);
if (productElement) {
    productElement.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Smooth scroll to the element
    productElement.style.color = 'red'; // Change the color to highlight
    setTimeout(() => {
        productElement.style.color = ''; // Reset color after 2 seconds
    }, 2000);
}
}


function showDropdown() {
    document.getElementById('dropdown').style.display = 'block';
}

function hideDropdown() {
    document.getElementById('dropdown').style.display = 'none';
}

// Add event listeners to dropdown items
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function() {
        hideDropdown(); // Hide dropdown after selection
    });
});