

function division() {
  
    let one= Number(document.getElementById('numOne').value);
    let two= Number(document.getElementById('numTwo').value);
    let three = one/two;
    document.getElementById('numThree').value = three;
 
}

function addNumbers() {
    let x= Number(document.getElementById("x").value);
    let y= Number(document.getElementById("y").value);
    let z = x + y;
    document.getElementById('z').value = z;
    
}

function subtractNumbers() {
    let num1= Number(document.getElementById("num1").value);
    let num2= Number(document.getElementById("num2").value);
    let num3 = num1 - num2;
    document.getElementById('num3').value = num3;
    
}

function multiply() {
    let one = Number(document.getElementById('numberOne').value);
    let two = Number(document.getElementById('numberTwo').value);
    let three = one*two;
    console.log(three)
    document.getElementById('answer').value = three;
}


