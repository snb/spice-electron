Spice Client PoC
================

Small demo proof of concept for an electron app for macOS and Windows that can
include native libraries required for doing cool stuff.

Dependencies
------------
To build or run in dev mode, you'll need node.js and appropriate compiler tools
for your platform. On macOS, that's Xcode's command line tools, and for Windows,
Visual Studio.

Running
-------

    npm start

Packaging
---------

To package up into zipped .app bundle on macOS or MSI installer for Windows

    npm run make

TODO: add instructions on signing the app so other people can run it. See
<https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging#important-signing-your-code>
