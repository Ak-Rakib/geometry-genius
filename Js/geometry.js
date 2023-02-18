document.getElementById('btn-triangle').addEventListener('click', function () {
    const inputTriangleB = document.getElementById('input-b-triangle');
    const getInputTriangleValueB = inputTriangleB.value;


    const inputTriangleH = document.getElementById('input-h-triangle');
    const getInputTriangleValueH = inputTriangleH.value;

    if (getInputTriangleValueB.value === isNaN) {
        return alert('Please enter any valid number');
    }

    const calculateTriangle = (0.5 * getInputTriangleValueB * getInputTriangleValueH).toFixed(2);

    const showResultTriangle = document.getElementById('result-of-triangle');
    showResultTriangle.innerText = calculateTriangle;
});