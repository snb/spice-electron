const func = async () => {
  const response = await window.nativeAddon.runNativeAddon()
  const div = document.getElementById('native-container')
  div.innerText = `This output is from C++ addon: ${response}`
}

func()
