function add(){
    //alert("Button Test");
    let fn = parseFloat(document.getElementById("txtFirstNumber").value);
    let sn = parseFloat(document.getElementById("txtSecondNumber").value);
    document.getElementById("Result").value = fn+sn;
}


function sub(){
    //alert("Button Test");
    let fn = parseFloat(document.getElementById("txtFirstNumber").value);
    let sn = parseFloat(document.getElementById("txtSecondNumber").value);
    document.getElementById("Result").value = fn-sn;
}


function mul(){
    //alert("Button Test");
    let fn = parseFloat(document.getElementById("txtFirstNumber").value);
    let sn = parseFloat(document.getElementById("txtSecondNumber").value);
    document.getElementById("Result").value = fn*sn;
}


function div(){
    //alert("Button Test");
    let fn = parseFloat(document.getElementById("txtFirstNumber").value);
    let sn = parseFloat(document.getElementById("txtSecondNumber").value);
    document.getElementById("Result").value = fn/sn;
}
