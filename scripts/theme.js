function adp_theme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: black)').matches) {
        const body = document.querySelector("#id");
        body.style.backgroundColor = "black";
    }
    else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: white)').matches) {
        const body = document.querySelector("#id");
        body.style.backgroundColor = "white";
    }
}
adp_theme()