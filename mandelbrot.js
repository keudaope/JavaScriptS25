// Nykyinen näkyvä alue kompleksitasossa
let view = {
    xMin: -2.5,
    xMax: 1.0,
    yMin: -1.2,
    yMax: 1.2
};

function drawMandelbrot() {
    const canvas = document.getElementById('mandelbrotCanvas');
    const ctx = canvas.getContext('2d');

    const widthInput = document.getElementById('widthInput');
    const heightInput = document.getElementById('heightInput');
    const iterInput = document.getElementById('iterInput');

    const width = parseInt(widthInput.value, 10) || 800;
    const height = parseInt(heightInput.value, 10) || 600;
    const maxIter = parseInt(iterInput.value, 10) || 200;

    canvas.width = width;
    canvas.height = height;

    const imgData = ctx.createImageData(width, height);
    const data = imgData.data;

    const xMin = view.xMin;
    const xMax = view.xMax;
    const yMin = view.yMin;
    const yMax = view.yMax;

    for (let py = 0; py < height; py++) {
        const y0 = yMin + (py / height) * (yMax - yMin);

        for (let px = 0; px < width; px++) {
            const x0 = xMin + (px / width) * (xMax - xMin);

            let x = 0;
            let y = 0;
            let iteration = 0;

            while (x * x + y * y <= 4 && iteration < maxIter) {
                const xTemp = x * x - y * y + x0;
                y = 2 * x * y + y0;
                x = xTemp;
                iteration++;
            }

            const idx = (py * width + px) * 4;

            if (iteration === maxIter) {
                // Piste kuuluu Mandelbrotin joukkoon
                data[idx] = 0;
                data[idx + 1] = 0;
                data[idx + 2] = 0;
                data[idx + 3] = 255;
            } else {
                // Väritetään ulkopuoliset pisteet
                const t = iteration / maxIter;

                const r = Math.floor(9 * (1 - t) * t * t * t * 255);
                const g = Math.floor(15 * (1 - t) * (1 - t) * t * t * 255);
                const b = Math.floor(8.5 * (1 - t) * (1 - t) * (1 - t) * t * 255);

                data[idx] = r;
                data[idx + 1] = g;
                data[idx + 2] = b;
                data[idx + 3] = 255;
            }
        }
    }

    ctx.putImageData(imgData, 0, 0);
}

// Hiiren rullalla zoomaus
function handleWheelZoom(event) {
    event.preventDefault(); // Estetään sivun scrollaus

    const canvas = event.currentTarget;
    const rect = canvas.getBoundingClientRect();

    const width = canvas.width;
    const height = canvas.height;

    // Pikselikoordinaatit canvaksella
    const px = event.clientX - rect.left;
    const py = event.clientY - rect.top;

    // Pikseli → kompleksiluku
    const x0 = view.xMin + (px / width) * (view.xMax - view.xMin);
    const y0 = view.yMin + (py / height) * (view.yMax - view.yMin);

    // deltaY < 0 = rulla ylös = zoom sisään
    // deltaY > 0 = rulla alas = zoom ulos
    const zoomFactor = event.deltaY < 0 ? 0.8 : 1.25;

    // Skaalataan etäisyys hiiren kohdasta reunoihin
    const dxMin = x0 - view.xMin;
    const dxMax = view.xMax - x0;
    const dyMin = y0 - view.yMin;
    const dyMax = view.yMax - y0;

    view.xMin = x0 - dxMin * zoomFactor;
    view.xMax = x0 + dxMax * zoomFactor;
    view.yMin = y0 - dyMin * zoomFactor;
    view.yMax = y0 + dyMax * zoomFactor;

    // Piirretään uudella näkymällä
    drawMandelbrot();
}

document.addEventListener('DOMContentLoaded', () => {
    const drawBtn = document.getElementById('drawBtn');
    const canvas = document.getElementById('mandelbrotCanvas');

    drawBtn.addEventListener('click', () => {
        // Nollataan zoom takaisin alkuarvoon, jos haluat niin:
        // view = { xMin: -2.5, xMax: 1.0, yMin: -1.2, yMax: 1.2 };
        drawMandelbrot();
    });

    // Lisätään zoomaus-listener
    canvas.addEventListener('wheel', handleWheelZoom, { passive: false });

    // Piirretään ensimmäinen kuva
    drawMandelbrot();
});
