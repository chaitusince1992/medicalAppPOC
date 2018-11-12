import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'medical app';
  currentWindow;
  webContents;
  constructor(private electronSer: ElectronService) {
  }

  ngOnInit() {
    if(this.electronSer.isElectronApp) {
      this.currentWindow = this.electronSer.remote.getCurrentWindow();
      this.webContents = this.electronSer.remote.getCurrentWebContents() ;
      this.electronSer.remote.globalShortcut.register("CommandOrControl+I", ()=>{
        this.toggleDev();
      })
    }
  }
  toggleDev() {
    // this.currentWindow.toggleDev();
    this.webContents.isDevToolsOpened() ? this.webContents.closeDevTools(): this.webContents.openDevTools();
  }
  minimise() {
    // let currentWindow = this.electronSer.remote.getCurrentWindow();
    this.currentWindow.minimize();
  }
  maximise() {
    // let currentWindow = this.electronSer.remote.getCurrentWindow();
    this.currentWindow.isMaximized() ? this.currentWindow.unmaximize() : this.currentWindow.maximize();
  }
  close() {
    // let currentWindow = this.electronSer.remote.getCurrentWindow();
    this.currentWindow.close();
    // currentWindow = null;
  }
}
