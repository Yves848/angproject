import { Injectable } from '@angular/core';
import { fileList } from 'src-backend/interfaces/interface';
import { UtilsService } from './utils.service';
import { DataService } from './data.service';

const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class IpcService {

  constructor(private utils: UtilsService, private data: DataService) {

  }

  listen() {
    electron.ipcRenderer.on('r-getFiles', (event: any, arg: fileList) => {
      console.log('r-getFiles', arg);
      const a: fileList[] = [...this.data.files, arg]
      this.data.files = a;
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

  getFiles(dir: string): fileList[] {
    return <fileList[]>electron.ipcRenderer.sendSync('getFiles', { dir });

  }

  getFiles2(dir: string): void {
    electron.ipcRenderer.send('getFile', { dir });

  }

  getTags(path: string, file: string): void {
    electron.ipcRenderer.send('getTags', { path, file });
  }
}
