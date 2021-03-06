import { Component, NgZone, OnInit } from '@angular/core';
import { IpcService } from './../../services/ipc.service';
import { DataService } from './../../services/data.service';
import { UtilsService } from './../../services/utils.service';
import { fileList } from 'src-backend/interfaces/interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  _worker = new Worker("/src/app/webWorkers/main.worker.ts", { type: 'module' });


  constructor(private ipc: IpcService, public data: DataService, private utils: UtilsService, private ngZone: NgZone) {
    //ipc.listen();
    this._worker.onmessage
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const result = this.ipc.openDialog();
    if (result && result.length) {
      this.data.path = result[0]
      this.utils.changeCaption(this.data.path);
      this.getFiles(this.data.path);
    }
  }

  // openDialog2(): void {
  //   const result = this.ipc.openDialog();
  //   if (result && result.length) {
  //     this.data.path = result[0]
  //     this.utils.changeCaption(this.data.path);
  //     //this.getFiles2();
  //   }
  // }

  getFiles(path: string): void {
    const filesObservable = this.data.loadFiles(path);
    filesObservable.subscribe((files: fileList[]) => {
      this.data.files = files;
    });
  }


  getTags(): void {
    this.ipc.getTags(this.data.path, this.data.selectedFile!);
  }

  getAllTags(): void {
    this.ngZone.runOutsideAngular(() => {
      //console.log('getAllTags', this.data.files)
      this._worker.postMessage('message');
    });


  }

}
