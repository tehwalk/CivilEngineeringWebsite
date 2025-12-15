
function openHamModal() {
    document.getElementById('column-nav').style.animation = "overlay-diag 1s";
    document.getElementById('column-nav').style.display = 'block';
    document.getElementById('column-nav').setAttribute("aria-hidden", false)
}

function closeHamModal() {
    document.getElementById('column-nav').style.display = 'none';
    document.getElementById('column-nav').setAttribute("aria-hidden", true)
}