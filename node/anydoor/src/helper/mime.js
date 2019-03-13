const path = require('path');
const iconPath=path.join(__dirname,'../pic');
const mimeTypes = {
    "js": {
        text: "text/javascript;charset=utf-8",
        icon: 'path.join(__dirname,../../../pic/js.png)'
    },
    "tpl": {
        text: "text/html;charset=utf-8",
        icon: '../pic/folder_128px_1229436_easyicon.net.ico'
    },
    "json": {
        text: "application/json;charset=utf-8",
        icon: '../pic/document_128px_1230971_easyicon.net.ico'
    },
    "txt": {
        text: "text/plain;charset=utf-8",
        icon: ''
    },
    "ico": {
        text: "image/x-icon",
        icon: '../pic/document_128px_1230971_easyicon.net.ico'
    },
    "png": {
        text: "image/png",
        icon: '../pic/document_128px_1230971_easyicon.net.ico'
    },
    "jpg": {
        text: "image/jpeg",
        icon: '../pic/document_128px_1230971_easyicon.net.ico'
    }
};

module.exports = (filePath) => {
    //extname:获取拓展名
    let ext = path.extname(filePath).split('.').pop().toLowerCase();
    if (!ext) {
        ext = filePath;//?
    }
    return mimeTypes[ext] ? mimeTypes[ext] : mimeTypes['txt'];
    // return mimeTypes[ext] ? mimeTypes[ext].text : mimeTypes['txt'].text;

    // if (!mimeTypes[ext]) {
    //     return mimeTypes['txt'].text;
    // } else { 
    //     return mimeTypes[ext].text;
    //  }
    //mimeTypes[ext]可能为undefined
    // return mimeTypes[ext].text || mimeTypes['txt'].text;
};