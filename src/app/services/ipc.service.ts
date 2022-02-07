import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';

const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class IpcService {

  constructor(private utils: UtilsService) {

  }

  listen() {
    electron.ipcRenderer.on('r-getFiles', (event: any, arg: any) => {
      console.log('frontend');
      console.log(event);
      console.log(arg);
    })
  }

  openDialog() {
    console.log('service', 'openDialog');
    const result = electron.ipcRenderer.sendSync('openDialog');
    console.log('result', result);
    if (result) {
      return result;
    }
  }

  getFiles(dir: string): string[] {
    return electron.ipcRenderer.sendSync('getFiles', { dir })
  }

  getTags(path: string, file: string): void {
    electron.ipcRenderer.send('getTags', { path, file });
  }
}
