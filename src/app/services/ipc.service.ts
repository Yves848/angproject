import { Injectable } from '@angular/core';
const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class IpcService {

  constructor() {

  }

  listen() {
    electron.ipcRenderer.on('response', (event: any, arg: any) => {
      console.log('frontend');
      console.log(event);
      console.log(arg);
    })
    console.log('send message to backend');
    electron.ipcRenderer.send('test', 'je suis là');
  }
}
