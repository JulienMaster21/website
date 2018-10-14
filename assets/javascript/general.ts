function menu() {
    //console.log("Hello!");
    if (document.getElementById("dropdown").style.display == "initial") {
        document.getElementById("dropdown").style.display = "none";
    }
    else {
    document.getElementById("dropdown").style.display = "initial";
    }
}
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 88) {
        alert("JASON! = {JASON! : \"JASON!\"}");
    }
    else if(event.keyCode == 70) {
        alert("You paid respect.");
    }
});