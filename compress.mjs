import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import fs from 'fs';
import path from 'path';

const logoPath = 'd:/sudharsan/hrifys-edunest-main/src/assets/logonav.png';
const heroPath = 'd:/sudharsan/hrifys-edunest-main/src/assets/hero.png';
const outDir = 'd:/sudharsan/hrifys-edunest-main/src/assets';

async function optimize() {
  console.log('Optimizing images using imagemin API...');
  
  try {
    const files = await imagemin([logoPath, heroPath], {
      destination: outDir,
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8]
        })
      ]
    });
    
    console.log('Images optimized!');
    files.forEach(file => {
      console.log(`Optimized: ${file.sourcePath} -> ${file.destinationPath}`);
      const oldSize = fs.statSync(file.sourcePath).size;
      const newSize = file.data.length;
      console.log(`Size change: ${oldSize} -> ${newSize} bytes (${Math.round((1 - newSize/oldSize) * 100)}% reduction)`);
    });
  } catch (err) {
    console.error('Error optimizing images:', err);
  }
}

optimize();
