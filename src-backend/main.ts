import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import { listen as listenFiles } from './filesUtils';
import { listen as listenDialogs } from './dialogs';
import { select } from './databases';

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
  listenDialogs(mainWindow);
  select();
});

app.on("window-all-closed", () => {
  app.quit();
})


