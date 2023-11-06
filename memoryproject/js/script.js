function change(k) {
    let x = document.getElementById("hamburger");
    if (k.matches) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myFunction() {
    let x = document.getElementById("hamburger");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
let k = window.matchMedia("(min-width: 401px)");
        k.addEventListener('change', function(k) {
            let x = document.getElementById("hamburger");
            if (k.matches) {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        });

if (window.matchMedia("(max-width:400px)").matches) {
    document.addEventListener('click', function(e) {
        let x = document.getElementById("hamburger");
        if(e.target.id === "dropbtn" || e.target.className ==="link"  || e.target.className ==="icon" || e.target.className ==="fa fa-bars") {
            return;
        } 
        else {
            x.style.display = "none";
        }
    }, false);
}