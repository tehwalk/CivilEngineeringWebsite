const works = [
    {
        id: 0,
        title: "Ανακαίνιση εξοχικού στο Παλαιό Φάληρο",
        images: ["images/istockphoto-939281438-612x612.jpg", "images/istockphoto-1312027174-612x612.jpg", "images/istockphoto-2175973016-612x612.jpg"]

    },
    {
        id: 1,
        title: "Ανέγερση διπλοκατοικίας στον Αγ. Ανδρέα Παιανίας",
        images: ["images/istockphoto-1312027174-612x612.jpg", "images/istockphoto-1312027174-612x612.jpg", "images/istockphoto-2175973016-612x612.jpg"]

    },
    {
        id: 2,
        title: "Ανέγερση διπλοκατοικίας στην Ηλιούπολη",
        images: ["images/istockphoto-2175973016-612x612.jpg", "images/istockphoto-1312027174-612x612.jpg", "images/istockphoto-2175973016-612x612.jpg"]

    },
    {
        id: 3,
        title: "Ανακαίνιση μονοκατοικίας στην Κηφισιά",
        images: ["images/pexels-expect-best-79873-323780.jpg", "images/istockphoto-1312027174-612x612.jpg", "images/istockphoto-2175973016-612x612.jpg"]

    },
    {
        id: 4,
        title: "Επέκταση μονοκατοικίας στο Κορωπί",
        images: ["images/pexels-photo-6422939.jpeg", "images/istockphoto-1312027174-612x612.jpg", "images/istockphoto-2175973016-612x612.jpg"]

    }
];
// this is the element of the works array that is visible when the modal is active, and null when the modal is inactive
let active_element = null;
let currentIndex = 0;
let startX = 0;
let endX = 0;
let isDragging = false;

function load_images() {
    gallery_items = document.getElementsByClassName('gallery-piece');

    for (const item of gallery_items) {
        var element = works[parseInt(item.dataset.number)];
        var image = item.children[0]; ///make sure the first chlid element of the div is the image!!!
        image.src = element.images[0];
        var overlay_text = item.querySelector('.show-image-overlay h2');
        item.style.cursor = 'pointer';
        overlay_text.innerHTML = element.title;
        item.onclick = function () {
            openModal(item.dataset.number);
        };
    }

}

function openModal(number) {
    const imageModal = document.getElementById('imageModal');
    imageModal.style.display = 'block';
    const work_title = document.getElementById('work-title');
    const buttonPrevious = document.querySelector('.carousel-control.left');
    const buttonNext = document.querySelector('.carousel-control.right');
    active_element = works[parseInt(number)];
    work_title.innerHTML = active_element.title;
    //reset carousel index
    currentIndex = 0;
    //reset touch variables
    startX = 0;
    endX = 0;
    updateCarousel();

    buttonPrevious.addEventListener('click', (e) => {
        
        handleButtons(false);
        isDragging = false;
    });

    buttonNext.addEventListener('click', (e) => {
        
        handleButtons(true);
        isDragging = false;

    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowLeft') {
            handleButtons(false);
        }
        else if (e.code === 'ArrowRight') {
            handleButtons(true);
        }
    });
    //FIXME: Buttons get pressed twice when on touchscreen, why?

    imageModal.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    imageModal.addEventListener('touchmove', (e) => {
        if (isDragging) endX = e.touches[0].clientX;
    });

    imageModal.addEventListener('touchend', (e) => {
        if (isDragging) {
            handleSwipe(e);
            isDragging = false;
        }
    });
}

function handleSwipe(e) {
    const swipeThreshold = 200;

    if (Math.abs(endX - startX) > swipeThreshold) {
        if (endX < startX) {
            handleButtons(true);
        } else {
            handleButtons(false);
        }
        updateCarousel();
    }
}

function handleButtons(forward) {
    if (forward == true) {
        currentIndex = (currentIndex + 1) % active_element.images.length;
    }
    else {
        currentIndex = (currentIndex - 1 + active_element.images.length) % active_element.images.length;
    }
    updateCarousel();
}

function updateCarousel() {
    const image = document.getElementById('carousel-image');
    const image_index = document.getElementById('image-index');
    image.src = active_element.images[currentIndex];
    image_index.innerHTML = "Εικόνα " + (currentIndex + 1).toString() + "/" + active_element.images.length.toString();
    startX = 0;
    endX = 0;
}

function closeModal() {
    active_element = null;
    document.getElementById('imageModal').style.display = 'none';
    //document.removeEventListener('keydown');
}

document.addEventListener('DOMContentLoaded', load_images)

