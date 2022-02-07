import { ipcMain } from "electron";
import * as path from "path";
import * as fs from "fs";


export function getFiles(dir: string) {
  return fs.readdirSync(path.join(dir));
}
/*
  listen : fonction qui ajouter les listeners pour le module fileutils

*/
export function listen(mainWindow: Electron.BrowserWindow) {
  ipcMain.on('getFiles', (event, arg) => {
    console.log('ipcMain');
    //console.log(event);
    console.log(arg);
    const files = getFiles(arg.dir);
    if (files) event.returnValue = files;
  })
}
