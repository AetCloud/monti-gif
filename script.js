const gif = document.getElementById("gif");
const body = document.body;
const colorThief = new ColorThief();

gif.setAttribute("crossOrigin", "anonymous"); // Fix CORS issues

gif.addEventListener("load", function () {
    setTimeout(() => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Set canvas size to match the image
        canvas.width = gif.width;
        canvas.height = gif.height;

        // Draw the image on the canvas
        ctx.drawImage(gif, 0, 0, canvas.width, canvas.height);

        // Get the center pixel (or a small region around the center)
        const centerX = Math.floor(canvas.width / 2);
        const centerY = Math.floor(canvas.height / 2);
        const pixelData = ctx.getImageData(centerX, centerY, 1, 1).data;

        let [r, g, b] = pixelData;

        // Convert to pastel by blending with white
        r = Math.min(255, Math.floor(r + (255 - r) * 0.6));
        g = Math.min(255, Math.floor(g + (255 - g) * 0.6));
        b = Math.min(255, Math.floor(b + (255 - b) * 0.6));

        body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }, 500); // Delay ensures the image is fully loaded
});
