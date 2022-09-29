
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

export function addDecoder(loader) {
    console.log("ADD loader nest");
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('./include/draco/');
    dracoLoader.setDecoderConfig({ type: 'js' });
    loader.setDRACOLoader(dracoLoader);
    console.log(dracoLoader);
    console.dir(dracoLoader);
}
