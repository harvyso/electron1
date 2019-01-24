const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain

app.on('ready', _ => {
    console.log('ready!')
    var mw = new BrowserWindow({ height: 400, width: 400 });

    mw.loadURL( `file://${__dirname}/countdown.html` );

    mw.on( 'closed', ()=>{ wm = null; } )
});

ipc.on( 'event1', ()=>{
  console.log( 'event1' );
} );
