
window.addEventListener('scroll', function() {
    var landingPage = document.getElementById('landing');
    var scrollDown = document.getElementById('scrollDown');
    var content = document.getElementById('content');
    var scrollPosition = window.scrollY;

    if (scrollPosition > landingPage.offsetHeight * 0.8) {
        content.classList.remove('hidden');
        scrollDown.style.display = 'none';
    } else {
        content.classList.add('hidden');
        scrollDown.style.display = 'block';
    }
});
