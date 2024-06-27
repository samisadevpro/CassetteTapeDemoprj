// Selecting elements from the DOM
const menu_icon = document.querySelector('.menu');
const nav_bar = document.querySelector('.nav-bar')
const mar_text = document.querySelector('.weekly-special')

// Adding click event listener to the menu icon
menu_icon.addEventListener('click', () => {
    // Toggling the 'change' class for animation
    nav_bar.classList.toggle("change");
    // Toggling the 'stop' class to control marquee animation
    mar_text.classList.toggle("stop");
});

// Function to update the rating value display
function updateRatingValue(value) {
    // Updating the text content of the rating box
    document.getElementById('rating-box').innerText = value;
};
