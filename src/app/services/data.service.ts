import { Injectable } from '@angular/core';
import { fileList } from '../../../src-backend/interfaces/interface'
import { IpcService } from './ipc.service';
import { Observable, BehaviorSubject } from 'rxjs';

const electron = (<any>window).require('electron');
@Injectable({
  providedIn: 'root'
})
export class DataService {
  path = '';
  //$files: Observable<fileList[]>;
  files: fileList[] = [];
  readonly EMPTY_STATE: fileList[] = [];


  selectedFile: fileList = {
    file: "",
    active: false,
    tags: undefined
  }

  constructor(private ipc: IpcService, private data: DataService) {
  }

  loadFiles(path: string): any {
    console.log('loadFiles', path);
    const filesObservable = new Observable<fileList[]>(observer => {
      this.getFiles2(path).then((files) => {
        if (files) {
          observer.next(files);
        } else {
          observer.next(this.EMPTY_STATE);
        }
      })
    })
    return filesObservable;

  }

  getFiles2(dir: string): Promise<fileList[]> {
    return electron.ipcRenderer.invoke('getFiles_Promise', dir);

  }
}
