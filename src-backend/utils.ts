import { ipcMain } from "electron";
import * as path from "path";
import * as fs from "fs";


export function listen(mainWindow: Electron.BrowserWindow) {
  ipcMain.on('caption', (event, arg) => {
    mainWindow.setTitle(arg.caption);
    event.returnValue = '';
  });
}
