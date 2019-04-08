function showNav() {
    console.log("this is working ");
    var x = document.getElementById("drop-nav");
    if (x.className === "drop-nav") {

        x.className += "unfold";

    } else {
        x.className = "drop-nav";
    }

}