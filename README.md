# electron-starter
Base application to get started with Electron (Win/Mac/Linux)


## Usefull Electron Links

Electron Homepage: http://electron.atom.io

Electron links: https://github.com/sindresorhus/awesome-electron

Electron-packager: https://www.npmjs.com/package/electron-packager


## Install

* Install node.js

* Clone this repo and install node modules:

```
$ cd electron-starter
$ npm install

```

* Run the app

```
$ npm start
```

## ELECTRON PACKAGE

electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> [optional flags...]

platform           all, or one or more of: darwin, linux, mas, win32 (comma-delimited if multiple)
arch               all, or one or more of: ia32, x64 (comma-delimited if multiple)

To build a package for linux 64 run:

```
$ npm run build-lin
```

To build a package for windows 64 run:

```
$ npm run build-win
```

To build a package for mac run:

```
$ npm run build-osx
```
