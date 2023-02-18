document.getElementById('btn-triangle').addEventListener('click', function () {
    const inputTriangleB = document.getElementById('input-b-triangle');
    const getInputTriangleValueB = inputTriangleB.value;


    const inputTriangleH = document.getElementById('input-h-triangle');
    const getInputTriangleValueH = inputTriangleH.value;

    const calculateTriangle = (0.5 * getInputTriangleValueB * getInputTriangleValueH).toFixed(2);

    const showResultTriangle = document.getElementById('result-of-triangle');
    showResultTriangle.innerText = calculateTriangle;
});


document.getElementById('btn-rectangle').addEventListener('click', function(){
    const inputRectangleW = document.getElementById('input-field-rectangle-w');
    const getInputRectangleValueW = inputRectangleW.value;

    const inputRectangleI = document.getElementById('input-field-rectangle-I');
    const getInputRectangleValueI = inputRectangleI.value;

    const calculatorRectangle = (getInputRectangleValueW * getInputRectangleValueI).toFixed(2);

    const showResultRectangle = document.getElementById('result-of-rectangle');
    showResultRectangle.innerText = calculatorRectangle;
});