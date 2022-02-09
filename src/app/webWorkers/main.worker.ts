/// <reference lib="webworker" />
import { fileList } from 'src-backend/interfaces/interface';


addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  // data.files.forEach(file => {
  //   file.tags = this.ipc.getTags(this.data.path, file);
  // })
  postMessage(response);
});
