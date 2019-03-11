function textShow() {
    var x = document.getElementById("paragraph2");
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    } else {
        x.style.display = "none";
    }
}

export{textShow}