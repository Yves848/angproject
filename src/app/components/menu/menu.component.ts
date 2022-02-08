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

  getFiles(): void {
    const files = this.ipc.getFiles(this.data.path);
    files.forEach(file => {
      this.data.files.push(
        file
      )
    })

    console.log('getFiles', this.data.files);
  }

  getTags(): void {
    this.ipc.getTags(this.data.path, this.data.selectedFile!.file);
  }

}
