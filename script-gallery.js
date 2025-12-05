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
    hookupEvents();
}

function hookupEvents() {
    const buttonPrevious = document.querySelector('.carousel-control.left');
    const buttonNext = document.querySelector('.carousel-control.right');
    const carousel_touch = document.querySelector('.carousel-touch-surface');
    ///button events
    buttonPrevious.addEventListener('click', (e) => {
        console.log("button previous pressed!")
        handleButtons(false);
        //isDragging = false;
    });

    buttonNext.addEventListener('click', (e) => {
        console.log("button next pressed!")
        handleButtons(true);
        //isDragging = false;

    });
    ///arrow key events
    document.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowLeft') {
            handleButtons(false);
        }
        else if (e.code === 'ArrowRight') {
            handleButtons(true);
        }
    });
    ///touch events
    carousel_touch.addEventListener('touchstart', (e) => {
        //if (e.target.classList.contains("carousel-control") || e.target.classList.contains("close-modal")) return;
        startX = e.touches[0].clientX;
        //isDragging = true;
    });

    carousel_touch.addEventListener('touchmove', (e) => {
        //if (e.target.classList.contains("carousel-control") || e.target.classList.contains("close-modal")) return;
        //if (isDragging) 
        endX = e.touches[0].clientX;
    });

    carousel_touch.addEventListener('touchend', (e) => {
        //if (e.target.classList.contains("carousel-control") || e.target.classList.contains("close-modal")) return;
        handleSwipe(e);
    });
}

function openModal(number) {
    const imageModal = document.getElementById('imageModal');
    imageModal.style.display = 'block';
    imageModal.style.animation = "overlay-diag 1s";
    const work_title = document.getElementById('work-title');
    active_element = works[parseInt(number)];
    work_title.innerHTML = active_element.title;
    //reset carousel index
    currentIndex = 0;
    //reset touch variables
    resetTouch();
    updateCarousel();

}

function handleSwipe(e) {
    const swipeThreshold = 200;
    console.log("swiped");
    if (Math.abs(endX - startX) > swipeThreshold) {
        if (endX < startX) {
            handleButtons(false);
        } else {
            handleButtons(true);
        }
        resetTouch();
        updateCarousel();
    }
}

function handleButtons(forward) {
    if (forward == true) {
        console.log("forward!");
        currentIndex = (currentIndex + 1) % active_element.images.length;
    }
    else {
        console.log("back!");
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
    resetTouch();
    active_element = null;
    //document.getElementById('imageModal').style.animation = "overlay-diag-rev 0.5s"
    document.getElementById('imageModal').style.display = 'none';
    //document.removeEventListener('keydown');
}

function resetTouch() {
    startX = 0;
    endX = 0;
}

document.addEventListener('DOMContentLoaded', load_images)

