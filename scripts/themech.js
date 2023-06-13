document.querySelector('button', id="theme_ch").onclick = function() {
    const body = document.querySelector("#id");
    body.style.backgroundColor = "white";
    console.log(body.style.backgroundColor);
    if (body.style.backgroundColor === "white") {
        body.style.backgroundColor = "black";
    }
    else if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
    }
    else {body.style.backgroundColor = "white";
    
    }
    
}