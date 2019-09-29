import { exiftool } from 'exiftool-vendored'
import { predict } from './imagePredictor'
import { loadImage } from './imageLoader'
import { getFiles } from './utils/fileUtils'

const processImage = async (model, imagePath) => {
  try {
    const input = await loadImage(imagePath)
    const prediction = await predict(model, input);
    console.log('prediction', prediction);

    await exiftool.write(imagePath, {
      SupplementalCategories: prediction.filter(p => p.probability >= 0.01).map(p => p.className).join(','),
    })
  } catch (error) {
    console.error(error);
    return { imagePath, success: false }
  }
  return { imagePath, success: true }
}

export const apiClassify = async (model) => {
  const imagePaths = await getFiles('./public/input');
  console.log('Running predictions...');

  const predictions = await Promise.all(imagePaths.map(item => processImage(model, item)))
  console.log('Finished!', predictions);
}
