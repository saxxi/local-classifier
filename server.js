import express from 'express'
import { classifierModel } from './src/models/classifierLoader'
import { apiClassify } from './src/web/apiClassify'
import { imageLister } from './src/web/imageLister'

const app = express()

const startServer = async () => {
  const classifier = await classifierModel() // carica il model

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })
  app.get('/classify', apiClassify(classifier));
  app.get('/image-lister', imageLister);
  app.use(express.static('public'))
  app.listen(5000, () => console.log('Example app listening on http://localhost:5000!'))
}

startServer()
