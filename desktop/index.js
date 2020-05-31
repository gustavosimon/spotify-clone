const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({ width: 1980, height: 1200 });

  win.loadURL('http://localhost:3000');

  win.isFullScreen();

  win.setIcon(path.join(__dirname, 'public/spotify.png'));
}

app.on('ready', createWindow);
