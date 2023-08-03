// JavaScript to toggle section content visibility
const sectionTitles = document.querySelectorAll('.section-toggle');

sectionTitles.forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling; // Get the content div after the title
        content.classList.toggle('collapsed'); // Toggle the "collapsed" class to hide/show the content
    });
});

function handleScroll() {
    const header = document.querySelector('.sticky-header');
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

// Add the event listener to handle scroll events
window.addEventListener('scroll', handleScroll);