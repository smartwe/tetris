const { app, BrowserWindow } = require('electron');
const path = require("path");

function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, "preload.js")
    }
  })
  win.loadFile('./tetris.html')
}

app.on('ready', createWindow);
