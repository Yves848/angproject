import { Component, OnInit } from '@angular/core';
import { IpcService } from './../../services/ipc.service';
import { fileList } from '../../../interfaces/interface'
import { DataService } from './../../services/data.service';
import { UtilsService } from './../../services/utils.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private ipc: IpcService, public data: DataService, private utils: UtilsService) {
    //ipc.listen();
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const result = this.ipc.openDialog();
    if (result && result.length) {
      this.data.path = result[0]
      this.utils.changeCaption(this.data.path);
      this.getFiles();
    }
  }

  getFiles(): void {
    const files = this.ipc.getFiles(this.data.path);
    this.data.files = files.map(file => {
      return {
        file: file,
        active: false
      }
    })
    console.log('getFiles', this.data.files);
  }

  getTags(): void {
    this.ipc.getTags(this.data.path, this.data.selectedFile);
  }

}
