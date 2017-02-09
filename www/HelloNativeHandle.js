var HelloNativeError = require('./HelloNativeError');

// args = [reference, variable]
function HelloNativeHandle(success, error, intent, operation, args) {
    var reference = args[0];
    var variable = args[1];

}
module.exports = HelloNativeHandle;
