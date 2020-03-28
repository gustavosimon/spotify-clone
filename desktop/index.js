const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({ width: 1980, height: 1200 });
    win.isFullScreen();
    win.loadURL('http://localhost:3000');
}

app.on('ready', createWindow);
