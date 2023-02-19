// Set random background color
function randomBackgroundCardColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

document.addEventListener('mouseover', function(){
    document.getElementById('random-bg-color-1').style.backgroundColor = randomBackgroundCardColor();
});

document.addEventListener('mouseover', function(){
    document.getElementById('random-bg-color-2').style.backgroundColor = randomBackgroundCardColor();
});

document.addEventListener('mouseover', function(){
    document.getElementById('random-bg-color-3').style.backgroundColor = randomBackgroundCardColor();
});

document.addEventListener('mouseover', function(){
    document.getElementById('random-bg-color-4').style.backgroundColor = randomBackgroundCardColor();
});

document.addEventListener('mouseover', function(){
    document.getElementById('random-bg-color-5').style.backgroundColor = randomBackgroundCardColor();
});

document.addEventListener('mouseover', function(){
    document.getElementById('random-bg-color-6').style.backgroundColor = randomBackgroundCardColor();
});


let serial = 0;

// Get result Triangle
document.getElementById('btn-triangle').addEventListener('click', function () {
    serial +=1;
    const inputTriangleB = document.getElementById('input-b-triangle');
    const getInputTriangleValueB = inputTriangleB.value;


    const inputTriangleH = document.getElementById('input-h-triangle');
    const getInputTriangleValueH = inputTriangleH.value;

    const calculatorTriangle = (0.5 * getInputTriangleValueB * getInputTriangleValueH).toFixed(2);
    dataOfTriangle(serial, calculatorTriangle);
});

function dataOfTriangle(serial, calculatorTriangle){
    const tableContainer = document.getElementById('calculation-area');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}.</td>
        <td>Triangle</td>
        <td>${calculatorTriangle}cm<sup>2</sup></td>
        <td><button class='btn btn-outline-success'>Convert to m<sup>2</sup></button></td>
    `;
    tableContainer.appendChild(tr);
}


document.getElementById('btn-rectangle').addEventListener('click', function () {
    serial +=1;
    const inputRectangleW = document.getElementById('input-field-rectangle-w');
    const getInputRectangleValueW = inputRectangleW.value;

    const inputRectangleI = document.getElementById('input-field-rectangle-I');
    const getInputRectangleValueI = inputRectangleI.value;

    const calculatorRectangle = (getInputRectangleValueW * getInputRectangleValueI).toFixed(2);
    dataOfRectangle(serial, calculatorRectangle)
    
});

function dataOfRectangle(serial, calculatorRectangle){
    const tableContainer = document.getElementById('calculation-area');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}.</td>
        <td>Rectangle</td>
        <td>${calculatorRectangle}cm<sup>2</sup></td>
        <td><button class='btn btn-outline-success'>Convert to m<sup>2</sup></button></td>
    `;
    tableContainer.appendChild(tr);
}


document.getElementById('btn-parallelogram').addEventListener('click', function () {
    const b = 10;
    const h = 12;

    const calculatorParallelogram = b * h;

    const showResultParallelogram = document.getElementById('result-of-parallelogram');
    showResultParallelogram.innerText = calculatorParallelogram;

});



document.getElementById('btn-Rhombus').addEventListener('click', function () {
    const d1 = 16;
    const d2 = 8;

    const calculatorRhombus = 0.5 * 16 * 8;

    const showResultRhombus = document.getElementById('result-of-Rhombus');
    showResultRhombus.innerText = calculatorRhombus;
});
