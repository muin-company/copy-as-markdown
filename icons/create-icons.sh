#!/bin/bash
# Create simple placeholder icons using ImageMagick (if available) or Python PIL
# For now, let's create a simple SVG and convert it

cat > icon.svg << 'SVGEOF'
<svg width="128" height="128" xmlns="http://www.w3.org/2000/svg">
  <rect width="128" height="128" fill="#111827"/>
  <text x="64" y="74" font-family="Arial" font-size="48" font-weight="bold" fill="#10b981" text-anchor="middle">M↓</text>
</svg>
SVGEOF

# Create PNG versions if imagemagick is available
if command -v convert &> /dev/null; then
  convert icon.svg -resize 16x16 icon16.png
  convert icon.svg -resize 32x32 icon32.png
  convert icon.svg -resize 48x48 icon48.png
  convert icon.svg -resize 128x128 icon128.png
  echo "Icons created with ImageMagick"
else
  echo "ImageMagick not found. Creating placeholder files."
  # Create empty placeholder PNGs
  touch icon16.png icon32.png icon48.png icon128.png
fi
