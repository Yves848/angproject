import * as id3 from 'node-id3';
import { ipcMain } from "electron";
import * as path from "path";
import * as fs from "fs";
import { fileList, Tags } from './interfaces/interface'


export function readTags(file: string): Tags {
  let tags: id3.Tags = {};
  tags = id3.read(file);
  return {
    album: tags.album,
    artist: tags.artist,
    title: tags.title,
    image: tags.image

  };

}

/*
  listen : fonction qui ajouter les listeners pour le module mp3

*/
export function listen(mainWindow: Electron.BrowserWindow) {
  ipcMain.on('getTags', (event, arg) => {
    console.log('getTags', arg);
    if (arg.path && arg.file) {
      if (fs.existsSync(path.join(arg.path, arg.file))) {
        const tags = readTags(path.join(arg.path, arg.file));
        console.log(tags.artist);
        console.log(tags.title);
        console.log(tags.image ? 'cover' : 'no cover');
      }
    }

    event.returnValue = '';
  })
}
