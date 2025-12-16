
function openHamModal() {
    let col_nav = document.getElementById('column-nav');
    col_nav.style.animation = "overlay-diag 1s";
    col_nav.style.display = 'block';
    col_nav.setAttribute("aria-hidden", false);
    //hide navbar top-nav with aria
    document.querySelector(".navbar.top-nav").setAttribute("aria-hidden", true);
    document.querySelector(".cta").setAttribute("aria-hidden", true);
    document.querySelector("body").classList.add("noscroll");
}

function closeHamModal() {
    document.getElementById('column-nav').style.display = 'none';
    document.getElementById('column-nav').setAttribute("aria-hidden", true);
    document.querySelector(".navbar.top-nav").setAttribute("aria-hidden", false);
    let cta = document.querySelector(".cta");
    if (cta!=null) cta.setAttribute("aria-hidden", false);
    document.querySelector("body").classList.toggle("noscroll");
}



//document.addEventListener('DOMContentLoaded', chan)