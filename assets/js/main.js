
document.addEventListener('DOMContentLoaded', function () {
    // Check if the current page is not the start page
    if (window.location.pathname !== '#home') {
        // Redirect to the start page
        window.location.href = '#home';
    }
});



AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 900, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


function sweet() {
    Swal.fire({
        title: "Submitted",
        text: "Your message has been submitted",
        icon: "success"
    });
}




document.addEventListener('DOMContentLoaded', function () {
    var readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var textContent = this.closest('.text-content');
            var fullText = textContent.querySelector('.full-text');

            if (fullText.style.display === 'none' || fullText.style.display === '') {
                fullText.style.display = 'inline';
                this.textContent = 'Read Less';
                this.classList.add('active');
            } else {
                fullText.style.display = 'none';
                this.textContent = 'Read More';
                this.classList.remove('active');
            }
        });
    });
});

