import { exiftool } from 'exiftool-vendored'
import { predict } from '../models/imagePredictor'
import { loadImage } from '../models/imageLoader'

const processImage = async (model, imagePath) => {
  try {
    const input = await loadImage(imagePath)
    const prediction = await predict(model, input);
    await exiftool.write(imagePath, {
      SupplementalCategories: prediction.filter(p => p.probability >= 0.75).map(p => p.className).join(','),
    })
  } catch (error) {
    console.error(error);
    return { imagePath, success: false }
  }
  return { imagePath, success: true }
}

export const apiClassify = model => async (req, res, next) => {
  const imagePaths = [
    './public/bn.jpg',
    './public/bn.jpg',
    './public/bn.jpg',
    './public/bn.jpg',
    './public/bn.jpg',
  ];

  res.send({
    predictions: await Promise.all(imagePaths.map(item => processImage(model, item))),
  });
}
