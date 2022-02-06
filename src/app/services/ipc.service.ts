import { Injectable } from '@angular/core';
const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class IpcService {

  constructor() {

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
}
