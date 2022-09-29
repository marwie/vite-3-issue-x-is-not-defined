
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { addDecoder } from "nested-package";

const loader = new GLTFLoader();
addDecoder(loader);

// const ktx2Loader = new KTX2Loader();
// ktx2Loader.setTranscoderPath('./include/ktx2/');

// loader.setKTX2Loader(ktx2Loader);

console.log("LOAD");

loader.load("./Cube.glb", loaded => {
    console.log("DONE", loaded);
});