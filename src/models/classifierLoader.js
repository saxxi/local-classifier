import * as mobilenet from '@tensorflow-models/mobilenet';

// const handler = tfn.io.fileSystem("./path/to/your/model.json");
// export const classifierModel = () => mobilenet.load(handler);
export const classifierModel = () => mobilenet.load();
