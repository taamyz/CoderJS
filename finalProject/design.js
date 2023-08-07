
window.addEventListener('load', function() {
    const logoContainer = document.querySelector('.logo-container');

    setTimeout(function() {
        logoContainer.style.transform = 'translate(-40%, 0%)';
        logoContainer.style.paddingLeft = '300px';
        logoContainer.style.width = 'auto';

        document.body.style.backgroundColor = '#F1EDE1';
        document.getElementById('logo').style.filter = 'invert(0)';
        document.getElementById('logo').style.width = '350px';
    }, 1500); 
});