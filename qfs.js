/**
 * qfs node module provides wrappers with exposed q promise capabilities for fs asynchronous methods
 * For full description of core node fs module please refer to official node fs documentation: http://nodejs.org/api/fs.html#fs_file_system
 *
 * This module requires module {@link module:node_modules/q}
 * @class
 * @requires module:node_modules/q
 */

/**
 * A promise object provided by the q promise library.
 * @external Promise
 * @see {@link https://github.com/kriskowal/q/wiki/API-Reference}
 */

var QFS_Q = require("q");
var QFS_FS = require('fs');

/**
 * q-wrapper for fs.rename
 * @param  {string} oldPath old path
 * @param  {string} newPath new path
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.rename = function(oldPath, newPath) {
    var deferred = QFS_Q.defer();
    QFS_FS.rename(oldPath, newPath, function(err) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.ftruncate
 * @param  {number} fd file descriptor
 * @param  {integer} len  amount of data to be truncated
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.ftruncate = function(fd, len) {
    var deferred = QFS_Q.defer();
    QFS_FS.ftruncate(fd, len, function(err) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.truncate
 * @param  {number} fd file descriptor
 * @param  {integer} len  amount of data to be truncated
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.truncate = function(fd, len) {
    var deferred = QFS_Q.defer();
    QFS_FS.truncate(fd, len, function(err) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.chown
 * @param  {string} path path to file
 * @param  {integer} uid  owner ID
 * @param  {integer} gid  group ID
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.chown = function(path, uid, gid) {
    var deferred = QFS_Q.defer();
    QFS_FS.chown(path, uid, gid, function(err) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.fchown
 * @param  {number} fd file descriptor
 * @param  {integer} uid  owner ID
 * @param  {integer} gid  group ID
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.fchown = function(fd, uid, gid) {
    var deferred = QFS_Q.defer();
    QFS_FS.fchown(fd, uid, gid, function(err) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.lchown
 * @param  {string} path path to file
 * @param  {integer} uid  owner ID
 * @param  {integer} gid  group ID
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.lchown = function(path, uid, gid) {
    var deferred = QFS_Q.defer();
    QFS_FS.lchown(path, uid, gid, function(err) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.chmod
 * @param  {string} path path to file
 * @param  {integer} mode value of mode in octal or integer format
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.chmod = function(path, mode) {
    var deferred = QFS_Q.defer();
    QFS_FS.chmod(path, mode, function(err) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.fchmod
 * @param  {number} fd file descriptor
 * @param  {integer} mode value of mode in octal or integer format
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.fchmod = function(fd, mode) {
    var deferred = QFS_Q.defer();
    QFS_FS.fchmod(fd, mode, function(err) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.lchmod
 * @param  {string} path path to file
 * @param  {integer} mode value of mode in octal or integer format
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.lchmod = function(path, mode) {
    var deferred = QFS_Q.defer();
    QFS_FS.lchmod(path, mode, function(err) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.stat
 * @param  {string} path path to file
 * @return {external:Promise} On success the promise will be resolved with fs.Stats object.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.stat = function(path) {
    var deferred = QFS_Q.defer();
    QFS_FS.stat(path, function(err, result) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(result);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.lstat
 * @param  {string} path path to file
 * @return {external:Promise} On success the promise will be resolved with fs.Stats object.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.lstat = function(path) {
    var deferred = QFS_Q.defer();
    QFS_FS.lstat(path, function(err, result) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(result);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.fstat
 * @param  {number} fd file descriptor
 * @return {external:Promise} On success the promise will be resolved with fs.Stats object.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.fstat = function(fd) {
    var deferred = QFS_Q.defer();
    QFS_FS.fstat(fd, function(err, result) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(result);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.link
 * @param  {string} srcpath path to source file
 * @param  {string} dstpath path to destination
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.link = function(srcpath, dstpath) {
    var deferred = QFS_Q.defer();
    QFS_FS.link(srcpath, dstpath, function(err) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.symlink
 * @param  {string} srcpath path to source file
 * @param  {string} dstpath path to destination file
 * @param  {string} type can be set to 'dir', 'file', or 'junction' (default is 'file'), only for Windows platform
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.symlink = function(srcpath, dstpath, type) {
    var deferred = QFS_Q.defer();
    type = typeof type !== 'undefined' ? type : 'file';
    QFS_FS.symlink(srcpath, dstpath, type, function(err) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.readlink
 * @param  {string} path path to link file
 * @return {external:Promise} On success the promise will be resolved with string content of link file.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.readlink = function(path) {
    var deferred = QFS_Q.defer();
    QFS_FS.readlink(path, function(err, result) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(result);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.realpath
 * @param  {string} path  path to some location
 * @param  {object} cache object literal of mapped paths that can be used to force a specific path resolution or avoid additional fs.stat calls for known real paths
 * @return {external:Promise} On success the promise will be resolved with string containg resolved path.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.realpath = function(path, cache) {
    var deferred = QFS_Q.defer();
    cache = typeof cache !== 'undefined' ? cache : {};
    QFS_FS.realpath(path, cache, function(err, result) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(result);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.unlink
 * @param  {string} path path to file
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.unlink = function(path) {
    var deferred = QFS_Q.defer();
    QFS_FS.unlink(path, function(err) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.rmdir
 * @param  {string} path path to directory
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.rmdir = function(path) {
    var deferred = QFS_Q.defer();
    QFS_FS.rmdir(path, function(err) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.mkdir
 * @param  {string} path path to directory
 * @param  {integer} mode value of mode in octal or integer format, defaults to 0777
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.mkdir = function(path, mode) {
    var deferred = QFS_Q.defer();
    mode = typeof mode !== 'undefined' ? mode : 0777;
    QFS_FS.mkdir(path, function(err) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.readdir
 * @param  {string} path  path to directory
 * @param  {object} cache object literal of mapped paths that can be used to force a specific path resolution or avoid additional fs.stat calls for known real paths
 * @return {external:Promise} On success the promise will be resolved with array of the names of the files in the directory excluding '.' and '..'.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.readdir = function(path) {
    var deferred = QFS_Q.defer();
    QFS_FS.readdir(path, function(err, result) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(result);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.close
 * @param  {number} fd file descriptor
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.close = function(fd) {
    var deferred = QFS_Q.defer();
    QFS_FS.close(fd, function(err) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.open
 * @param  {string} path  path to file
 * @param  {string} flags specify mode in which we open file, acceptable values:
 *                        'r' - Open file for reading. An exception occurs if the file does not exist.
 *                        'r+' - Open file for reading and writing. An exception occurs if the file does not exist.
 *                        'rs' - Open file for reading in synchronous mode. Instructs the operating system to bypass the local file system cache.
 *                        This is primarily useful for opening files on NFS mounts as it allows you to skip the potentially stale local cache. It has a very real impact on I/O performance so don't use this flag unless you need it.
 *                        Note that this doesn't turn fs.open() into a synchronous blocking call. If that's what you want then you should be using fs.openSync()
 *                        'rs+' - Open file for reading and writing, telling the OS to open it synchronously. See notes for 'rs' about using this with caution.
 *                        'w' - Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
 *                        'wx' - Like 'w' but fails if path exists.
 *                        'w+' - Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
 *                        'wx+' - Like 'w+' but fails if path exists.
 *                        'a' - Open file for appending. The file is created if it does not exist.
 *                        'ax' - Like 'a' but fails if path exists.
 *                        'a+' - Open file for reading and appending. The file is created if it does not exist.
 *                        'ax+' - Like 'a+' but fails if path exists.
 * @param  {integer} mode value of mode in octal or integer format, defaults 0666
 * @return {external:Promise} On success the promise will be resolved with file descriptor (fd).<br> On error the promise will be rejected with an {@link Error}.
 */
exports.open = function(path, flags, mode) {
    var deferred = QFS_Q.defer();
    mode = typeof mode !== 'undefined' ? mode : 0666;
    QFS_FS.open(path, flags, mode, function(err, result) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(result);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.utimes
 * @param  {string} path  path to file
 * @param  {integer} atime access time
 * @param  {integer} mtime modification time
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.utimes = function(path, atime, mtime) {
    var deferred = QFS_Q.defer();
    QFS_FS.utimes(path, atime, mtime, function(err) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.futimes
 * @param  {number} fd file descriptor
 * @param  {integer} atime access time
 * @param  {integer} mtime modification time
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.futimes = function(fd, atime, mtime) {
    var deferred = QFS_Q.defer();
    QFS_FS.futimes(fd, atime, mtime, function(err) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.fsync
 * @param  {number} fd file descriptor
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.fsync = function(fd) {
    var deferred = QFS_Q.defer();
    QFS_FS.fsync(fd, function(err) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.write</br>
 * Original fs.write method return 3 arguments to callback: error, written & buffer. </br> Author of this wrapper wants to stick to q mantra as close as possible so every method provide to resolver 1 argument. Resolving method combines 2 arguments into one: {written: result, buffer: buffer}
 * @param  {number} fd file descriptor
 * @param  {string|buffer} buffer   buffer of data that have to be written to the file
 * @param  {integer} offset   determine the starting point of datafrom buffer to be written
 * @param  {integer} length   specifying the number of bytes to read
 * @param  {integer} position refers to the offset from the beginning of the file where this data should be written. If position is null, the data will be written at the current position (defaults to null)
 * @return {external:Promise} On success the promise will be resolved with object in following notation {written: result, buffer: buffer}.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.write = function(fd, buffer, offset, length, position) {
    var deferred = QFS_Q.defer();
    position = typeof position !== 'undefined' ? position : null;
    QFS_FS.write(fd, buffer, offset, length, position, function(err, result, buffer) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve({
                written: result,
                buffer: buffer
            });
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.read</br>
 * Original fs.read method return 3 arguments to callback: error, bytesRead & buffer. </br> Author of this wrapper wants to stick to q mantra as close as possible so every method provide to resolver 1 argument. Resolving method combines 2 arguments into one: {bytesRead: bytesRead, buffer: buffer}
 * @param  {number} fd file descriptor
 * @param  {string|buffer} buffer   is the buffer that the data will be written to
 * @param  {integer} offset   offset in the buffer to start writing at
 * @param  {integer} length   specifying the number of bytes to read
 * @param  {integer} position specifying where to begin reading from in the file. If position is null, data will be read from the current file position (defaults to null)
 * @return {external:Promise} On success the promise will be resolved with object in following notation {bytesRead: bytesRead, buffer: buffer}.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.read = function(fd, buffer, offset, length, position) {
    var deferred = QFS_Q.defer();
    position = typeof position !== 'undefined' ? position : null;
    QFS_FS.read(fd, buffer, offset, length, position, function(err, result, buffer) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve({
                bytesRead: result,
                buffer: buffer
            });
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.readFile
 * @param  {string} path    path to file
 * @param  {object} options can contain one of following options: encoding (string, defaults to null), flag (string, defaults to 'r')
 * @return {external:Promise} On success the promise will be resolved with readed data.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.readFile = function(path, options) {
    var deferred = QFS_Q.defer();
    if (typeof options !== 'undefined') {
        options.encoding = typeof options.encoding !== 'undefined' ? options.encoding : null;
        options.flag = typeof options.flag !== 'undefined' ? options.flag : 'r';
    } else {
        options = {
            encoding: null,
            flag: 'r'
        };
    }
    QFS_FS.readFile(path, options, function(err, result) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(result);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.writeFile
 * @param  {string} path    path to file
 * @param  {string|buffer} data    data to be written to file
 * @param  {object} options can contain one of following options: encoding (string, defaults to 'utf8'), mode (integer or octal, defaults to 0666), flag (string, defaults to 'w')
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.writeFile = function(path, data, options) {
    var deferred = QFS_Q.defer();
    if (typeof options !== 'undefined') {
        options.encoding = typeof options.encoding !== 'undefined' ? options.encoding : 'utf8';
        options.mode = typeof options.mode !== 'undefined' ? options.mode : 0666;
        options.flag = typeof options.flag !== 'undefined' ? options.flag : 'w';
    } else {
        options = {
            encoding: 'utf8',
            mode: 0666,
            flag: 'w'
        };
    }
    QFS_FS.writeFile(path, data, options, function(err, result) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.appendFile
 * @param  {string} path    path to file
 * @param  {string|buffer} data    data to be written to file
 * @param  {object} options can contain one of following options: encoding (string, defaults to 'utf8'), mode (integer or octal, defaults to 0666), flag (string, defaults to 'a')
 * @return {external:Promise} On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.
 */
exports.appendFile = function(path, data, options) {
    var deferred = QFS_Q.defer();
    if (typeof options !== 'undefined') {
        options.encoding = typeof options.encoding !== 'undefined' ? options.encoding : 'utf8';
        options.mode = typeof options.mode !== 'undefined' ? options.mode : 0666;
        options.flag = typeof options.flag !== 'undefined' ? options.flag : 'a';
    } else {
        options = {
            encoding: 'utf8',
            mode: 0666,
            flag: 'a'
        };
    }
    QFS_FS.appendFile(path, data, options, function(err, result) {
        if (err) {
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(true);
        }
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.watchFile</br>
 * Original fs.watchFile method accept listener as one of arguments. This listener is used as a callback in case of any change made to the watched file.</br> By utilizing q notification capabilities we are able to mimic above listener behavior without loosing beauty of q premises. lease use .progress(function(result_object){...}); notation to receive events regarding watched file.</br> Method return 2 arguments to listener: current_stat & previous_stat. Author of this wrapper wants to stick to q manta as close as possible so this method provide to progress listener 1 argument. Resolver method combines 2 arguments into one: {current: current_stat, previous: previous_stat}
 * @param  {string} path    path to file
 * @param  {object} options can contain one of following options: persistent (boolean, defaults to true), interval (integer, defaults to 5007 miliseconds)
 * @return {external:Promise} On event this promisse will be notified with object in following notation {current: current_stat, previous: previous_stat}.
 */
exports.watchFile = function(path, options) {
    var deferred = QFS_Q.defer();
    if (typeof options !== 'undefined') {
        options.persistent = typeof options.persistent !== 'undefined' ? options.persistent : true;
        options.interval = typeof options.interval !== 'undefined' ? options.interval : 5007;
    } else {
        options = {
            persistent: true,
            interval: 5007
        };
    }
    QFS_FS.watchFile(path, options, function(current_stat, previous_stat) {
        deferred.notify({
            current: current_stat,
            previous: previous_stat
        });
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.unwatchFile</br>
 * In its pure form this method really don't require wrapper, but because we used q progress as a listenerit will be difficult for user to provide proper function to detach watcher from file. This method will remove all listeners.
 * @param  {string} path path to watched file
 * @return {boolean}      Always return true.
 */
exports.unwatchFile = function(path) {
    QFS_FS.unwatchFile(path);
    return true;
};

/**
 * q-wrapper for fs.watch</br>
 * This method is very specific and its port is not so straightforward. To keep simplicity of q promises & to avoid injecting any extra argument to deffered object this method return object that contains promise & object of type fswatch. Usage of promise is straightforward. Object of type fswatch have to be closed to delete handler.</br>
 * E.g.
 * var a = require('qfs').watch('path/to/file.txt');
 * a.promise.progress(function(...){...}).error(function(...){...});
 * ...
 * a.handler.close();
 * </br>
 * Original fs.watch method accept listener as one of arguments. This listener is used as a callback in case of any change made to the watched file. By utilizing q notification capabilities we are able to mimic above listener behavior without loosing beauty of q premises. Please use .progress(function(result_object){...}); notation to receive events regarding watched file.</br>
 * Resolver method return 1 argument to progress listener: filename. This progress event / call == 'change' of file & is not specified (can be related to any type of action against watched file).</br>
 * Author of this wrapper wants to stick to q manta as close as possible so this method provide error event only once. After that event user is expected to close handler on its own.
 * @param  {string} path    path to file
 * @param  {object} options can contain one of following options: persistent (boolean, defaults to true)
 * @return {external:Promise} Returns object with the following notation: {handler: handler, promise:promise}. On event this promisse will be notified with object in following notation {event: event, filename: filename}. On error the promise will be rejected with an {@link Error}. Please remember to close handler after error.
 */
exports.watch = function(path, options) {
    var deferred = QFS_Q.defer();
    if (typeof options !== 'undefined') {
        options.persistent = typeof options.persistent !== 'undefined' ? options.persistent : true;
    } else {
        options = {
            persistent: true
        };
    }
    var handler = QFS_FS.watch(path, options, function(event, filename) {
        if (event == "change") deferred.notify(filename);
        if (event == "error") deferred.reject({
            event: event,
            filename: filename
        });
    });
    return {
        handler: handler,
        promise: deferred.promise
    };
};

/**
 * q-wrapper for fs.exists
 * @param  {string} path    path to file
 * @return {external:Promise} On success the promise will be resolved with true or false depanding on fact if file exists.
 */
exports.exists = function(path) {
    var deferred = QFS_Q.defer();
    QFS_FS.exists(path, function(result) {
        deferred.resolve(result)
    });
    return deferred.promise;
};

/**
 * q-wrapper for fs.createReadStream</br>
 * In its pure form this method really don't require wrapper, created for convinience of usage
 * @param  {string} path    path to file
 * @param  {object} options can contain one of following options: flags (string, defaults to 'r'), encoding (string, defaults to null), fd (file, defaults to null), mode (integer or octal, defaults to 0666), autoClose (boolean, defaults to true)
 * @return {ReadStream} Returns read stream object
 */
exports.createReadStream = function(path, options) {
    if (typeof options !== 'undefined') {
        options.flags = typeof options.flags !== 'undefined' ? options.flags : 'r';
        options.encoding = typeof options.encoding !== 'undefined' ? options.encoding : null;
        options.fd = typeof options.fd !== 'undefined' ? options.fd : null;
        options.mode = typeof options.mode !== 'undefined' ? options.mode : 0666;
        options.autoClose = typeof options.autoClose !== 'undefined' ? options.autoClose : true;
    } else {
        options = {
            flags: 'r',
            encoding: null,
            fd: null,
            mode: 0666,
            autoClose: true
        };
    }
    return QFS_FS.createReadStream(path, options)
};

//wrapper for fs.createWriteStream
////additional info: in its pure form this method really don't require wrapper, created for convinience of usage
//returns WriteStream object
/**
 * q-wrapper for fs.createReadStream</br>
 * In its pure form this method really don't require wrapper, created for convinience of usage
 * @param  {string} path    path to file
 * @param  {object} options can contain one of following options: flags (string, defaults to 'w'), encoding (string, defaults to null), mode (integer or octal, defaults to 0666)
 * @return {WriteStream} Returns read stream object
 */
exports.createWriteStream = function(path, options) {
    if (typeof options !== 'undefined') {
        options.flags = typeof options.flags !== 'undefined' ? options.flags : 'w';
        options.encoding = typeof options.encoding !== 'undefined' ? options.encoding : null;
        options.mode = typeof options.mode !== 'undefined' ? options.mode : 0666;
    } else {
        options = {
            flags: 'r',
            encoding: null,
            mode: 0666,
        };
    }
    return QFS_FS.createReadStream(path, options)
};
