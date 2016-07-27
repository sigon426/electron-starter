const electron = require('electron');
const {app, BrowserWindow} = electron;

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow( {width: 1000, height: 700, center: true, resizable: true});
  mainWindow.loadURL(`file://${__dirname}/index.html`);

});
