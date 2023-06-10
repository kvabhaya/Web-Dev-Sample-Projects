const PI = 3.14;

function calculate(){
    let r = parseFloat(document.getElementById("radius").value);
    let h = parseFloat(document.getElementById("height").value);
    document.getElementById("vol").value = PI*r**2*h;
}