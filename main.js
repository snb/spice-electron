const { app, BrowserWindow } = require('electron/main')
const nativeAddon = require('test-native-addon/js')

const runNativeAddon = () => {
  const nativeOutput = nativeAddon.helloWorld('Electron')
  console.log("Got this output from native package: " + nativeOutput)
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  runNativeAddon()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
