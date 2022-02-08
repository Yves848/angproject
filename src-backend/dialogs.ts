import { dialog } from 'electron';
import { ipcMain } from "electron";

export function openDialog() {
  const uri = dialog.showOpenDialogSync({
    properties: ['openDirectory', 'multiSelections'],
    filters: [
      { name: 'mp3', extensions: ['mp3'] },
      { name: 'Tous les fichiers', extensions: ['*'] }
    ]
  });
  return uri;
}

export function listen(mainWindow: Electron.BrowserWindow) {
  ipcMain.on('openDialog', (event, arg) => {
    console.log('openDialog');
    event.returnValue = openDialog();
  })
}
