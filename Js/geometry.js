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




document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const b = 10;
    const h = 12;
    
    const calculatorParallelogram = b * h;

    const showResultParallelogram = document.getElementById('result-of-parallelogram');
    showResultParallelogram.innerText = calculatorParallelogram;

});



document.getElementById('btn-Rhombus').addEventListener('click', function(){
    const d1 = 16;
    const d2 = 8;

    const calculatorRhombus = 0.5 * 16 * 8;

    const showResultRhombus = document.getElementById('result-of-Rhombus');
    showResultRhombus.innerText = calculatorRhombus;
});