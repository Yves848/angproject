import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import { listen as listenFiles } from './filesUtils';
import { listen as listenDialogs } from './dialogs';
import { listen as listenUtils } from './utils';
import { listen as listenMP3 } from './mp3';
import { select } from './databases';

let mainWindow: Electron.BrowserWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    //icon: path.join(__dirname, '../dist/angproject/assets/icon.png'),
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  })
  mainWindow.loadFile(path.join(__dirname, "../dist/angproject/index.html"));
  console.log('started');
  listenFiles(mainWindow); // Start listeners for files
  listenDialogs(mainWindow); // Start listeners for dialogs
  listenUtils(mainWindow);
  listenMP3(mainWindow);

  //select();
});



app.on("window-all-closed", () => {
  app.quit();
})


