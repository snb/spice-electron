const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('nativeAddon', {
  runNativeAddon: () => ipcRenderer.invoke('handleNativeAddon')
})
