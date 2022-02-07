import * as id3 from 'node-id3';
import { ipcMain } from "electron";
import * as path from "path";
import * as fs from "fs";


export function readTags(file: string): id3.Tags {
  let tags: id3.Tags = {};
  tags = id3.read(file);
  console.log(tags.artist);
  console.log(tags.title);
  console.log(tags.image ? 'cover' : 'no cover');
  return tags;

}

/*
  listen : fonction qui ajouter les listeners pour le module mp3

*/
export function listen(mainWindow: Electron.BrowserWindow) {
  ipcMain.on('getTags', (event, arg) => {
    console.log('getTags', arg);
    if (arg.path && arg.file) {
      if (fs.existsSync(path.join(arg.path, arg.file))) {
        readTags(path.join(arg.path, arg.file));
      }
    }

    event.returnValue = '';
  })
}
