export const predict = (model, input) => {
  console.log('predicting...');
  return model.classify(input)
}
