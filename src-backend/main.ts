import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import { listen as listenFiles } from './filesUtils';

let mainWindow: Electron.BrowserWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    //icon: path.join(__dirname, '../dist/angproject/assets/icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  mainWindow.loadFile(path.join(__dirname, "../dist/angproject/index.html"));
  console.log('started');
  listenFiles(mainWindow);
});

app.on("window-all-closed", () => {
  app.quit();
})


