import { Injectable } from '@angular/core';
import { fileList } from '../../../src-backend/interfaces/interface'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  path = '';
  files: fileList[] = [];
  selectedFile: fileList = {
    file: "",
    active: false,
    tags: undefined
  }

  constructor() { }
}
