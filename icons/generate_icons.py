#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont

# Design specs
bg_color = (17, 24, 39)  # #111827 - Dark gray
text_color = (16, 185, 129)  # #10b981 - Green
text = 'MD'

sizes = [16, 32, 48, 128]

for size in sizes:
    # Create image
    img = Image.new('RGB', (size, size), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Calculate font size
    font_size = max(int(size * 0.45), 8)
    
    # Try to load font
    font = None
    try:
        font = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial Bold.ttf', font_size)
    except:
        pass
    
    # Simple center calculation
    # For "MD" text, approximate width/height based on font size
    if font:
        # Estimate text dimensions (rough approximation)
        # Bold "MD" is roughly 1.5x font_size wide, 1x font_size tall
        est_width = int(font_size * 1.5)
        est_height = int(font_size * 0.9)
        x = (size - est_width) // 2
        y = (size - est_height) // 2
    else:
        # Fallback
        x = size // 4
        y = size //3
    
    # Draw the text
    draw.text((x, y), text, fill=text_color, font=font)
    
    # Save
    output_file = f'icon{size}.png'
    img.save(output_file, 'PNG')
    
    # Verify file size
    import os
    file_size = os.path.getsize(output_file)
    print(f'✓ Created {output_file} ({size}x{size}, {file_size} bytes)')

print('\n✨ All icons created successfully!')
