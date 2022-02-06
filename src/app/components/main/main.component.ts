import { Component, OnInit } from '@angular/core';
import { IpcService } from './../../services/ipc.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(ipc: IpcService) {

    ipc.listen();

  }

  ngOnInit(): void {
  }

}
