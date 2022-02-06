import { Component, OnInit } from '@angular/core';
import { IpcService } from './../../services/ipc.service';
import { fileList } from '../../../interfaces/interface'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  path = '';
  files: fileList[] = [];

  constructor(private ipc: IpcService) {
    ipc.listen();
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const result = this.ipc.openDialog();
    if (result && result.length) {
      this.path = result[0]
      this.getFiles();
    }
  }

  clickFile(file: fileList): void {
    this.files.forEach(file => file.active = false);
    file.active = true;
  }

  getFiles(): void {
    const files = this.ipc.getFiles(this.path);
    this.files = files.map(file => {
      return {
        file: file,
        active: false
      }
    })
    console.log('getFiles', this.files);
  }
}
