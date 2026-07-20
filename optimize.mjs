import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function optimizeImages() {
    const dir = '.';
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));
    let converted = 0;

    for (const file of files) {
        const name = path.basename(file, '.png');
        const outName = `${name}.webp`;
        
        try {
            await sharp(file)
                .webp({ quality: 80 })
                .toFile(outName);
            console.log(`✅ Converted ${file} -> ${outName}`);
            converted++;
        } catch (e) {
            console.error(`❌ Error converting ${file}:`, e);
        }
    }

    if (converted > 0) {
        // Replace in index.html, style.css, app.js
        const sourceFiles = ['index.html', 'style.css', 'app.js'];
        for (const src of sourceFiles) {
            if (fs.existsSync(src)) {
                let content = fs.readFileSync(src, 'utf-8');
                content = content.replace(/\.png/g, '.webp');
                fs.writeFileSync(src, content);
                console.log(`🔄 Updated references in ${src}`);
            }
        }
        console.log(`🎉 Optimization complete! Converted ${converted} images.`);
    } else {
        console.log(`No PNG images found to convert.`);
    }
}

optimizeImages().catch(console.error);
