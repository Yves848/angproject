import { ipcMain } from "electron";
import * as path from "path";
import * as fs from "fs";
import { readTags } from './mp3'
import { fileList } from './interfaces/interface';

export function getFiles(dir: string) {
  const files = fs.readdirSync(path.join(dir));
  return files.filter(file => {
    return (file.toUpperCase().indexOf('.MP3') >= 0);

  })
}
/*
  listen : fonction qui ajouter les listeners pour le module fileutils

*/
export function listen(mainWindow: Electron.BrowserWindow) {
  ipcMain.on('getFiles', (event, arg) => {
    console.log('getFiles', arg);
    const files = getFiles(arg.dir);
    if (files) {
      let filesWithTags: fileList[] = [];
      filesWithTags = files.map(file => {
        console.log('file', file);
        return {
          file: file,
          active: false,
          tags: readTags(path.join(arg.dir, file))
        }
      });
      console.log('filesWithTags', filesWithTags);
      event.returnValue = filesWithTags;
    }
  })
}
