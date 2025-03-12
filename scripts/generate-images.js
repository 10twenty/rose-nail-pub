const fs = require('fs');
const path = require('path');

// Base64 encoded 1x1 transparent PNG
const transparentPNG = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=';

// Create directories if they don't exist
const dirs = [
  path.join(__dirname, '../public/images'),
  path.join(__dirname, '../public/images/products')
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Create placeholder images
const images = [
  { path: '../public/images/hero-bg.png', width: 1920, height: 1080 },
  { path: '../public/images/products/product1.png', width: 800, height: 600 },
  { path: '../public/images/og-image.png', width: 1200, height: 630 }
];

images.forEach(({ path: imagePath, width, height }) => {
  const fullPath = path.join(__dirname, imagePath);
  fs.writeFileSync(fullPath, Buffer.from(transparentPNG, 'base64'));
  console.log(`Created ${imagePath}`);
}); 