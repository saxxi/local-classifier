import * as mobilenet from '@tensorflow-models/mobilenet';

// const handler = tfn.io.fileSystem("./path/to/your/model.json");
const handler = undefined
export const classifierModel = () => mobilenet.load(handler);
