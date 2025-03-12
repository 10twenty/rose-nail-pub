const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Function to create a placeholder image
function createPlaceholder(width, height, text, outputPath) {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Fill background
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, width, height);

    // Add text
    ctx.fillStyle = '#666666';
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width/2, height/2);

    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Save the image
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);
    console.log(`Created: ${outputPath}`);
}

// Create placeholders
createPlaceholder(400, 300, 'Product 1', path.join(__dirname, '../public/images/products/product1.png'));
createPlaceholder(1200, 400, 'Hero Background', path.join(__dirname, '../public/images/hero-bg.png')); 