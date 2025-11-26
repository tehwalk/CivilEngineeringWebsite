const works = [
    {
        id: 0,
        title: "Ανακαίνιση εξοχικού στο Παλαιό Φάληρο",
        images: ["images/istockphoto-939281438-612x612.jpg", "images/istockphoto-1312027174-612x612.jpg", "images/istockphoto-2175973016-612x612.jpg"]

    },
    {
        id: 1,
        title: "Ανέγερση διπλοκατοικίας στον Αγ. Ανδρέα Παιανίας",
        images: ["images/istockphoto-939281438-612x612.jpg", "images/istockphoto-1312027174-612x612.jpg", "images/istockphoto-2175973016-612x612.jpg"]

    }
];
// this is the element of the works array that is visible when the modal is active, and null when the modal is inactive
var active_element = null;
var currentIndex = 0;

function load_images() {
    gallery_items = document.getElementsByClassName('gallery-piece');

    for (const item of gallery_items) {
        var element = works[parseInt(item.dataset.number)];
        var image = item.children[0]; ///make sure the first chlid element of the div is the image!!!
        image.src = element.images[0];
        item.style.cursor = 'pointer';
        item.onclick = function () {
            openModal(item.dataset.number);
        };
    }

}

function openModal(number) {
    document.getElementById('imageModal').style.display = 'block';
    var work_title = document.getElementById('work-title');
    active_element = works[parseInt(number)];
    work_title.innerHTML = active_element.title;
    currentIndex = 0;
    updateCarousel();
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

function updateCarousel(){
    var image = document.getElementById('carousel-image');
    var image_index = document.getElementById('image-index');
    image.src = active_element.images[currentIndex];
    image_index.innerHTML = "Εικόνα " + (currentIndex+1).toString() + "/" + active_element.images.length.toString();
}

function closeModal() {
    active_element = null;
    document.getElementById('imageModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', load_images)

