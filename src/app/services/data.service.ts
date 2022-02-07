import { Injectable } from '@angular/core';
import { fileList } from '../../interfaces/interface'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  path = '';
  files: fileList[] = [];
  selectedFile: string = '';

  constructor() { }
}
