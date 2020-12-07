function multiply() {
    let one = Number(document.getElementById('numberOne').value);
    let two = Number(document.getElementById('numberTwo').value);
    let three = one*two;
    console.log(three)
    document.getElementById('answer').value = three;
}


