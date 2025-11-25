const works = [
    {
        id : 0,
        title:"Ανακαίνιση εξοχικού στο Παλαιό Φάληρο",
        images:["images/istockphoto-939281438-612x612.jpg","images/istockphoto-1312027174-612x612.jpg"]

    }
];

function load_images(){
    gallery_items = document.getElementsByClassName('gallery-piece');

    for(const item of gallery_items){
        var active_element = works[parseInt(item.dataset.number)];
        var image = item.children[0]; ///make sure the first chlid element of the div is the image!!!
        image.src = active_element.images[0];
        item.style.cursor = 'pointer';
        item.onclick = function() {
            openModal(this.dataset.id);
        };
    }
    
}

function openModal(id) {
    document.getElementById('imageModal').style.display = 'block';
    var work_title = document.getElementById('work-title');
    //TODO: Make the related entry from works array to appear
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', load_images)