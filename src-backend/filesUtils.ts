import { ipcMain } from "electron";
import * as path from "path";
import * as fs from "fs";


export function getFiles() {
  return fs.readdirSync(path.join(__dirname));
}

export function listen(mainWindow: Electron.BrowserWindow) {
  ipcMain.on('test', (event, arg) => {
    console.log('ipcMain');
    //console.log(event);
    //console.log(arg);
    mainWindow.webContents.send('response', getFiles());
  })
}
