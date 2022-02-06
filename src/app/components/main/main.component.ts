import { Component, OnInit } from '@angular/core';
import { IpcService } from './../../services/ipc.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  path = '';
  files: string[] = [];

  constructor(private ipc: IpcService) {

    ipc.listen();

  }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.path = this.ipc.openDialog()[0];
    this.getFiles();
  }

  getFiles(): void {
    this.files = this.ipc.getFiles(this.path);
    console.log('getFiles', this.files);
  }

}
