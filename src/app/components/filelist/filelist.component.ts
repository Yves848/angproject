import { Component, OnInit } from '@angular/core';
import { IpcService } from './../../services/ipc.service';
import { fileList } from '../../../../src-backend/interfaces/interface'
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.css']
})
export class FilelistComponent implements OnInit {

  constructor(private ipc: IpcService, public data: DataService) { }

  ngOnInit(): void {
  }

  clickFile(file: fileList): void {
    this.data.files.forEach(file => file.active = false);
    file.active = true;
    this.data.selectedFile = file;
    console.log('clickFile', file);
    console.log('Selected file', file.file);
  }

}
