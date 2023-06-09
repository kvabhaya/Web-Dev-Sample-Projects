const PI = 3.14;

function calculate(){
    let r = parseFloat(document.getElementById("radius").value);
    document.getElementById("para").value = 2*PI*r;
    document.getElementById("area").value = PI*r*r;
}
