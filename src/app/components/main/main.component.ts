import { Component, OnInit } from '@angular/core';
import { IpcService } from './../../services/ipc.service';
import { fileList } from '../../../interfaces/interface'
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {


  constructor(private ipc: IpcService, public data: DataService) {

  }

  ngOnInit(): void {
  }

}
