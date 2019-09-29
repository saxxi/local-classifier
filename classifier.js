import { classifierModel } from './src/classifierLoader'
import { apiClassify } from './src/apiClassify'

(async () => {
  console.log('Loading model...');
  const classifier = await classifierModel() // carica il model
  console.log('Classifying..');
  apiClassify(classifier)
})()
