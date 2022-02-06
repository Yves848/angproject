import { dialog } from 'electron';
import { ipcMain } from "electron";

export function openDialog() {
  const uri = dialog.showOpenDialogSync({ properties: ['openDirectory', 'multiSelections'] });
  return uri;
}

export function listen(mainWindow: Electron.BrowserWindow) {
  ipcMain.on('openDialog', (event, arg) => {
    console.log('ipcMain');
    //console.log(event);
    //console.log(arg);
    event.returnValue = openDialog();
    //mainWindow.webContents.send('r-dialog', openDialog());
  })
}
