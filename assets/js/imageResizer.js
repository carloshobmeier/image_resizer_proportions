document.addEventListener('DOMContentLoaded', function () {
    const originalWidthInput = document.getElementById('width');
    const originalHeightInput = document.getElementById('height');
    const setOriginalButton = document.getElementById('setOriginal');
    const widthSlider = document.getElementById('widthSlider');
    const heightSlider = document.getElementById('heightSlider');
    const widthValue = document.getElementById('widthValue');
    const heightValue = document.getElementById('heightValue');

    let originalWidth = 0;
    let originalHeight = 0;

    setOriginalButton.addEventListener('click', function () {
        originalWidth = parseInt(originalWidthInput.value);
        originalHeight = parseInt(originalHeightInput.value);
        if (!isNaN(originalWidth) && !isNaN(originalHeight) && originalWidth > 0 && originalHeight > 0) {
            widthSlider.value = originalWidth;
            heightSlider.value = originalHeight;
            widthSlider.max = originalWidth * 2;  // example to allow doubling the size
            heightSlider.max = originalHeight * 2;
            widthSlider.disabled = false;
            heightSlider.disabled = false;
            updateValues(originalWidth, originalHeight);
        } else {
            alert('Please enter valid dimensions.');
            widthSlider.disabled = true;
            heightSlider.disabled = true;
        }
    });

    widthSlider.addEventListener('input', function () {
        const newWidth = parseInt(widthSlider.value);
        const newHeight = Math.round(originalHeight * (newWidth / originalWidth));
        heightSlider.value = newHeight;
        updateValues(newWidth, newHeight);
    });

    heightSlider.addEventListener('input', function () {
        const newHeight = parseInt(heightSlider.value);
        const newWidth = Math.round(originalWidth * (newHeight / originalHeight));
        widthSlider.value = newWidth;
        updateValues(newWidth, newHeight);
    });

    function updateValues(width, height) {
        widthValue.textContent = width;
        heightValue.textContent = height;
    }
});


    function zerar() {
        document.getElementById('height').value = '';  // Limpa o primeiro input
        document.getElementById('width').value = '';  // Limpa o segundo input
    }




    document.addEventListener('DOMContentLoaded', function () {
        const widthSlider = document.getElementById('widthSlider');
        const widthValue = document.getElementById('widthValue');
        const originalWidthInput = document.getElementById('width');
        const percentageDisplay = document.getElementById('percentageDisplay');
    
        function updateWidth() {
            const originalWidth = parseInt(originalWidthInput.value);
            const newWidth = parseInt(widthSlider.value);
    
            // Calcula a porcentagem de mudança em relação à largura original
            const changePercentage = ((newWidth - originalWidth) / originalWidth * 100).toFixed(2);
    
            widthValue.textContent = newWidth;
            percentageDisplay.textContent = `Width Change: ${changePercentage}%`;
        }
    
        widthSlider.addEventListener('input', updateWidth);
        originalWidthInput.addEventListener('change', updateWidth);
    
        // Inicializa com os valores padrões ao carregar a página
        updateWidth();
    });
    