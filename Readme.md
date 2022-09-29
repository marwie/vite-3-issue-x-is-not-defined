
Steps to reproduce

1) validate that project runs
  - cd to src
  - run ``npm install``
  - run ``npm run dev``
  - open local url in browser and see console
  - note: no errors in console
2) produce bug
  - cd to src
  - run ``npm install``
  - run ``npm run build``
  - ensure that ``src/dist`` contains both the ``Cube.glb`` file and ``include`` directory (they are not copied automatically but are part of the repository, the dist directory is not automatically cleared for simplicty)
  - run ``npm run preview``
  - open local url in browser and see console
  - note: error in console saying something like ``Uncaught ReferenceError: m is not defined``
    
3) remove ``esbuild : keepNames: true`` in viteconfig and repeat step 2. After that bug is gone