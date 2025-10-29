const selectedProductImageContainer = document.getElementById('selected_product_image');
const thumbnails = document.querySelectorAll('div#thumbnails > div');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
var currentActiveElement = 0;

prevBtn.addEventListener('click', function (e) {
    if(currentActiveElement - 1 < 1) {
        return;
    }
    setSelectedProductImage(currentActiveElement - 1)
    removehighlightForThumbnail()
    addhighlightForThumbnail(Number(currentActiveElement - 1))
});

nextBtn.addEventListener('click', function (e) {
    if(currentActiveElement + 1 > 6) {
        return;
    }
    setSelectedProductImage(currentActiveElement + 1)
    removehighlightForThumbnail()
    addhighlightForThumbnail(Number(currentActiveElement + 1)) 
});

thumbnails.forEach((element) => {
    element.addEventListener('click', function(e) {
        setSelectedProductImage(e.target.id)
        removehighlightForThumbnail()
        addhighlightForThumbnail(Number(e.target.id))
    })
})

function setSelectedProductImage(id) {
    selectedProductImageContainer.setAttribute('style', `
        background: url(./assets/${id}.webp); background-position: center; background-repeat: no-repeat; background-size: contain;
    `)
}

function addhighlightForThumbnail(id) {
    thumbnails.forEach(function (element) {
        if(element.id == id) {
            currentActiveElement = id;
            element.classList.add('border-4', 'border-indigo-600')
        }
    })
}

function removehighlightForThumbnail() {
    thumbnails.forEach(function (element) {
        if(element.classList.contains('border-4')) {
            element.classList.remove('border-4', 'border-indigo-600')
        }
    })
}

// IIFE - IMMIDIATELY INVOKING FUNCTION EXPRESSION
(() => {
    addhighlightForThumbnail(1)
    setSelectedProductImage(1)
})();