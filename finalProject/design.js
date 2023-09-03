window.addEventListener('load', function() {
    const loaderContainer = document.querySelector('.loader-div');

    setTimeout(function() {
        loaderContainer.style.opacity = '0';
        loaderContainer.style.visibility = 'hidden';

        setTimeout(function() {
            loaderContainer.style.display = 'none';
        }, 800);
    }, 500);

    const logoContainer = document.querySelector('#logo');
    setTimeout(function() {
        logoContainer.style.transform = 'scale(0.5) translateX(-180%) translateY(0%)';
    }, 1500);

    const filters = document.querySelector('.filters');
    setTimeout(function() {
        filters.style.opacity = '1';
    }, 1500);

    const vSlider = document.querySelector('.vslider');
    const slider = document.querySelector('.slider');
    let vSliderHeight; 
    const clones = [];
    let scrollPos;

    const items = [...document.querySelectorAll('.slider-item')];
    const images = [...document.querySelectorAll('.cover')];

    images.forEach((image, idx) => {
        image.style.backgroundImage = `url(./images/${idx + 1}.png)`;
    });
    
    function getClonesHeight() {
        let height = 0;
        clones.forEach(clone => {
            height += clone.offsetHeight;
        });
        return height;
    };

    function getScrollPos() {
        return vSlider.scrollTop;
    };
    
    function calculateDimensions() {
        vSliderHeight = vSlider.getBoundingClientRect().height;
        sliderHeight = slider.getBoundingClientRect().height; 
        clonesHeight = getClonesHeight();
    };
    
    /*vSlider.addEventListener('scroll', scrollUpdate);*/
    
    function onLoad() {
        calculateDimensions();
        vSlider.scrollTo({ top: 1 });
        /*scrollUpdate();*/
    };
    
    onLoad();
});

let cafes = [];
let selectedCategories = new Set();

// Fetch the JSON data
fetch('..\finalProject\coffee.json')
    .then(response => response.json())
    .then(data => {
        cafes = data;
    });

function initializePage() {
    document.querySelectorAll('.filter').forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            
            // Toggle category selection
            if (selectedCategories.has(category)) {
                selectedCategories.delete(category);
                e.target.classList.remove('selected');
            } else {
                selectedCategories.add(category);
                e.target.classList.add('selected');
            }
            
            filterImages();
        });
    });

    document.querySelectorAll('.vslider .cover').forEach(cover => {
        cover.addEventListener('click', () => {
            const cafe = cafes.find(cafe => cafe.id === parseInt(cover.dataset.id));
            document.getElementById('cafe-name').textContent = cafe.name;
            document.getElementById('cafe-info').textContent = cafe.info;
            document.getElementById('cafe-modal').style.display = 'block';
        });
    });
    
    // Close modal function
    function closeModal() {
        document.getElementById('cafe-modal').style.display = 'none';
    }};