window.onload = function () {
    setTimeout(() => {
        startPastelRGBTransition();
    }, 1500); // Wait 1.5s before starting the RGB effect
};

function startPastelRGBTransition() {
    let hue = 280; // Starts in a purple range
    setInterval(() => {
        document.body.style.backgroundColor = `hsl(${hue}, 60%, 85%)`; // Light pastel effect
        hue = (hue + 1) % 360;
    }, 50); // Faster transitions
}
