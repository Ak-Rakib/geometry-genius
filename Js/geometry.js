// Set random background color
function randomBackgroundCardColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

document.addEventListener('mouseover', function () {
    document.getElementById('random-bg-color-1').style.backgroundColor = randomBackgroundCardColor();
});

document.addEventListener('mouseover', function () {
    document.getElementById('random-bg-color-2').style.backgroundColor = randomBackgroundCardColor();
});

document.addEventListener('mouseover', function () {
    document.getElementById('random-bg-color-3').style.backgroundColor = randomBackgroundCardColor();
});

document.addEventListener('mouseover', function () {
    document.getElementById('random-bg-color-4').style.backgroundColor = randomBackgroundCardColor();
});

document.addEventListener('mouseover', function () {
    document.getElementById('random-bg-color-5').style.backgroundColor = randomBackgroundCardColor();
});

document.addEventListener('mouseover', function () {
    document.getElementById('random-bg-color-6').style.backgroundColor = randomBackgroundCardColor();
});




let serial = 0;

// Get result Triangle
document.getElementById('btn-triangle').addEventListener('click', function () {
    serial += 1;
    const inputTriangleB = document.getElementById('input-b-triangle');
    const getInputTriangleValueB = inputTriangleB.value;


    const inputTriangleH = document.getElementById('input-h-triangle');
    const getInputTriangleValueH = inputTriangleH.value;

    if (isNaN(getInputTriangleValueB) || isNaN(getInputTriangleValueH)) {
        return alert('Please use a number');
    } else {
        const calculatorTriangle = (0.5 * getInputTriangleValueB * getInputTriangleValueH).toFixed(2);
        dataOfTriangle(serial, calculatorTriangle);
    }
});

function dataOfTriangle(serial, calculatorTriangle) {
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


// get result Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function () {
    serial += 1;
    const inputRectangleW = document.getElementById('input-field-rectangle-w');
    const getInputRectangleValueW = inputRectangleW.value;

    const inputRectangleI = document.getElementById('input-field-rectangle-I');
    const getInputRectangleValueI = inputRectangleI.value;

    if (isNaN(getInputRectangleValueW) || isNaN(getInputRectangleValueI)) {
        return alert('Please use a number');
    } else {
        const calculatorRectangle = (getInputRectangleValueW * getInputRectangleValueI).toFixed(2);
        dataOfRectangle(serial, calculatorRectangle)
    }
});

function dataOfRectangle(serial, calculatorRectangle) {
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



// get result Parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    serial += 1;
    const b = 10;
    const h = 12;

    const calculatorParallelogram = b * h;
    dataOfParallelogram(serial, calculatorParallelogram);
});

function dataOfParallelogram(serial, calculatorParallelogram) {
    const tableContainer = document.getElementById('calculation-area');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}.</td>
        <td>Parallelogram</td>
        <td>${calculatorParallelogram}cm<sup>2</sup></td>
        <td><button class='btn btn-outline-success'>Convert to m<sup>2</sup></button></td>
    `;
    tableContainer.appendChild(tr);
}



// Get result of Rhombus
document.getElementById('btn-Rhombus').addEventListener('click', function () {
    serial += 1;
    const d1 = 16;
    const d2 = 8;

    const calculatorRhombus = 0.5 * d1 * d2;
    dataOfRhombus(serial, calculatorRhombus)

});

function dataOfRhombus(serial, calculatorRhombus) {
    const tableContainer = document.getElementById('calculation-area');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}.</td>
        <td>Rhombus</td>
        <td>${calculatorRhombus}cm<sup>2</sup></td>
        <td><button class='btn btn-outline-success'>Convert to m<sup>2</sup></button></td>
    `;
    tableContainer.appendChild(tr);
}



// Get result of Pentagon
document.getElementById('btn-pentagon').addEventListener('click', function () {
    serial += 1;
    const p = 6;
    const b = 10;

    const calculatorPentagon = 0.5 * p * b;
    dataOfPentagon(serial, calculatorPentagon);

});

function dataOfPentagon(serial, calculatorPentagon) {
    const tableContainer = document.getElementById('calculation-area');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}.</td>
        <td>Pentagon</td>
        <td>${calculatorPentagon}cm<sup>2</sup></td>
        <td><button class='btn btn-outline-success'>Convert to m<sup>2</sup></button></td>
    `;
    tableContainer.appendChild(tr);
}



// Get result of Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function () {
    serial += 1;
    const b = 10;
    const h = 12;

    const calculatorEllipse = b * h;
    dataOfEllipse(serial, calculatorEllipse);

});

function dataOfEllipse(serial, calculatorEllipse) {
    const tableContainer = document.getElementById('calculation-area');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}.</td>
        <td>Ellipse</td>
        <td>${calculatorEllipse}cm<sup>2</sup></td>
        <td><button class='btn btn-outline-success'>Convert to m<sup>2</sup></button></td>
    `;
    tableContainer.appendChild(tr);
}
