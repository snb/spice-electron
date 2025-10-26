Spice Client PoC
================

Small demo proof of concept for an electron app for macOS and Windows that can
include native libraries required for doing cool stuff.

This is largely copied from Electron's tutorial
[here](https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app) and
for native code
[here](https://www.electronjs.org/docs/latest/tutorial/native-code-and-electron).

main.js is the main process that has access to node and can run our native
addon package. renderer.js is run within the rendering process so can make
changes to the UI that's in index.html. preload.js sets up connections between
these processes so that the renderer can communicate with the main process via
IPC and run the native addon.

Dependencies
------------
To build or run in dev mode, you'll need node.js and appropriate compiler tools
for your platform. On macOS, that's Xcode's command line tools, and for Windows,
Visual Studio.

Before trying to run or build a packaged version, install npm dependencies with

    npm install

You'll also need to separately install (copy) the test-native-addon package from
its subdirectory. This will likely need to be re-run any time after making a
change in that package. `npm install` just creates a symlink for this dependency,
and that does not seem to work well when packaging, so this command tells it to
copy instead of symlinking.

    npm install --install-links ./test-native-addon

Running
-------

    npm start

Packaging
---------

To package up into zipped .app bundle on macOS or MSI installer for Windows

    npm run make

Built artifact will be found in out/

TODO: add instructions on signing the app so other people can run it. See
<https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging#important-signing-your-code>
