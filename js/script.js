// check if we are on index page
if (document.title === 'wait...') {
    // redirect to /pages/accueil.html after 5 seconds
    setTimeout(() => {
        window.location.href = 'https://gabrielvoissiere.github.io/oceane/pages/accueil.html';
    }, 5000);
}

