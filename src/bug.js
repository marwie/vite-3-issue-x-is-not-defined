
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

const loader = new GLTFLoader();

export function addDecoder(loader) {
    console.log("ADD loader nest");
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('./include/draco/');
    dracoLoader.setDecoderConfig({ type: 'js' });
    loader.setDRACOLoader(dracoLoader);
    console.log(dracoLoader);
    console.dir(dracoLoader);
}


addDecoder(loader);
// const ktx2Loader = new KTX2Loader();
// ktx2Loader.setTranscoderPath('./include/ktx2/');

// loader.setKTX2Loader(ktx2Loader);

console.log("LOAD");

loader.load("./Cube.glb", loaded => {
    console.log("DONE", loaded);
});