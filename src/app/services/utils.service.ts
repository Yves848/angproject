import { Injectable } from '@angular/core';
const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  listen() {

  }

  changeCaption(caption: string): string[] {
    return electron.ipcRenderer.sendSync('caption', { caption })
  }
}
