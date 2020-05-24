const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({ width: 1980, height: 1200 });

  win.loadURL('http://localhost:3000');

  win.isFullScreen();
}

app.on('ready', createWindow);
