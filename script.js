function enterNetflix() {
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    const heroVideo = document.querySelector('.hero-video');

    // Fade out intro
    introScreen.classList.add('fade-out');

    // After fade out, hide intro and show main content
    setTimeout(() => {
        introScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        
        // Ensure video plays when entering
        if (heroVideo) {
            heroVideo.play().catch(e => console.log("Autoplay prevented"));
        }
    }, 500);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Heart Overlay Logic
function showHeartOverlay() {
    const overlay = document.getElementById('heart-overlay');
    overlay.classList.remove('hidden');
}

function hideHeartOverlay() {
    const overlay = document.getElementById('heart-overlay');
    overlay.classList.add('hidden');
}
