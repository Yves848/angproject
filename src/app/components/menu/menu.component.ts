import { Component, OnInit } from '@angular/core';
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
  openDialog2(): void {
    const result = this.ipc.openDialog();
    if (result && result.length) {
      this.data.path = result[0]
      this.utils.changeCaption(this.data.path);
      this.getFiles2();
    }
  }

  getFiles(): void {
    this.data.files = this.ipc.getFiles(this.data.path);
    //this.ipc.getFiles(this.data.path);
  }

  getFiles2(): void {
    //this.data.files = this.ipc.getFiles(this.data.path);
    this.ipc.getFiles2(this.data.path);
  }

  getTags(): void {
    this.ipc.getTags(this.data.path, this.data.selectedFile!);
  }

}
