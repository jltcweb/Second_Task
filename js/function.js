function openNav() {
    let openEl = document.getElementById("right-side");
    openEl.style.right = "0px";
}

let openRight = document.getElementById("open");
openRight.addEventListener("click", openNav);

function closeNav() {
    let openEl = document.getElementById("right-side");
    openEl.style.right = "-250px"; 
}

let closeRight = document.getElementById("close");
closeRight.addEventListener("click", closeNav);