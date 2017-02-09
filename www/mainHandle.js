var inBrowser = false;
var HelloNativeError = require('./HelloNativeError');


function isInBrowser() {
    inBrowser = (window.cordova && window.cordova.platformId === 'browser') || !(window.phonegap || window.cordova);
    return inBrowser;
}

function storageSupportAnalyse() {
    if (!isInBrowser()) {
        return 0;
        //storageHandlerDelegate = exec;
    } else {
        if (window.localStorage) {
            return 1;
            //storageHandlerDelegate = localStorageHandle;
        } else {
            return 2;
            //console.log("ALERT! localstorage isn't supported");
        }
    }
}

//if storage not available gracefully fails, no error message for now
function HelloNativeHandle() {
    this.storageSupport = storageSupportAnalyse();
    switch (this.storageSupport) {
        case 0:
            var exec = require('cordova/exec');
            this.storageHandlerDelegate = exec;
            break;
        case 1:
            var localStorageHandle = require('./LocalStorageHandle');
            this.storageHandlerDelegate = localStorageHandle;
            break;
        case 2:
            console.log("ALERT! localstorage isn't supported");
            break;
        default:
            console.log("StorageSupport Error");
            break;
    }
}


/* clearing */
HelloNativeHandle.prototype.sayHello = function(success, error) {
    if (inBrowser) {
        try {
            localStorage.clear();
            success();
        } catch (e) {
            error(e);
        }
    } else {
        this.helloNativeHandleDelegate(success, error, "HelloNative", "sayHello", []);
    }
};


var helloNativeHandle = new HelloNativeHandle();
module.exports = helloNativeHandle;
