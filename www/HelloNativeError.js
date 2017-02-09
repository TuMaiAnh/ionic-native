/**
 * NativeStorageError
 * @constructor
 */
var HelloNativeError = function(code, source, exception) {
    this.code = code || null;
    this.source = source || null;
    this.exception = exception || null;
};

HelloNativeError.NATIVE_WRITE_FAILED = 1;
HelloNativeError.ITEM_NOT_FOUND = 2;
HelloNativeError.NULL_REFERENCE = 3;
HelloNativeError.UNDEFINED_TYPE = 4;
HelloNativeError.JSON_ERROR = 5;
HelloNativeError.WRONG_PARAMETER = 6;

module.exports = HelloNativeError;
