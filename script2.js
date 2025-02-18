/********************************** SIDENAV ***************************************** */
function toggleNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav.classList.contains("open")) {
        sidenav.classList.remove("open");
    } else {
        sidenav.classList.add("open");
    }
}

function closeNav() {
    document.getElementById("mySidenav").classList.remove("open");
}