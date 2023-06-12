
function calculate(){
    let l1 = parseFloat(document.getElementById("leg1").value);
    let l2 = parseFloat(document.getElementById("leg2").value);
    document.getElementById("sqr").value = ((l1**2)+(l2**2))**0.5;
}