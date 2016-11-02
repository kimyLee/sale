/**
 * Created by duoyi on 2016/9/12.
 */
/*$('#test').on('click',function () {

})*/

const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

const newWindowBtn = document.getElementById('test')

newWindowBtn.addEventListener('click', function (event) {
    const modalPath = path.join('file://', __dirname, '../sections/xiaoshou.html')
    let win = new BrowserWindow({ width: 400, height: 320 })
    win.on('close', function () { win = null })
    win.loadURL(modalPath)
    win.show()
})