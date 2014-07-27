QFS
========
qfs node module provides wrappers with exposed q promise capabilities for fs asynchronous methods.

For full description of core node fs module please refer to official node fs documentation: http://nodejs.org/api/fs.html#fs_file_system

This module requires module {@link module:node_modules/q}

## QFS_Q

A promise object provided by the q promise library.

## rename(oldPath, newPath)

q-wrapper for fs.rename

### Params:

* **string** *oldPath* old path
* **string** *newPath* new path

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## ftruncate(fd, len)

q-wrapper for fs.ftruncate

### Params:

* **number** *fd* file descriptor
* **integer** *len* amount of data to be truncated

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## truncate(fd, len)

q-wrapper for fs.truncate

### Params:

* **number** *fd* file descriptor
* **integer** *len* amount of data to be truncated

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## chown(path, uid, gid)

q-wrapper for fs.chown

### Params:

* **string** *path* path to file
* **integer** *uid* owner ID
* **integer** *gid* group ID

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## fchown(fd, uid, gid)

q-wrapper for fs.fchown

### Params:

* **number** *fd* file descriptor
* **integer** *uid* owner ID
* **integer** *gid* group ID

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## lchown(path, uid, gid)

q-wrapper for fs.lchown

### Params:

* **string** *path* path to file
* **integer** *uid* owner ID
* **integer** *gid* group ID

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## chmod(path, mode)

q-wrapper for fs.chmod

### Params:

* **string** *path* path to file
* **integer** *mode* value of mode in octal or integer format

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## fchmod(fd, mode)

q-wrapper for fs.fchmod

### Params:

* **number** *fd* file descriptor
* **integer** *mode* value of mode in octal or integer format

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## lchmod(path, mode)

q-wrapper for fs.lchmod

### Params:

* **string** *path* path to file
* **integer** *mode* value of mode in octal or integer format

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## stat(path)

q-wrapper for fs.stat

### Params:

* **string** *path* path to file

### Return:

* **external:Promise** On success the promise will be resolved with fs.Stats object.<br> On error the promise will be rejected with an {@link Error}.

## lstat(path)

q-wrapper for fs.lstat

### Params:

* **string** *path* path to file

### Return:

* **external:Promise** On success the promise will be resolved with fs.Stats object.<br> On error the promise will be rejected with an {@link Error}.

## fstat(fd)

q-wrapper for fs.fstat

### Params:

* **number** *fd* file descriptor

### Return:

* **external:Promise** On success the promise will be resolved with fs.Stats object.<br> On error the promise will be rejected with an {@link Error}.

## link(srcpath, dstpath)

q-wrapper for fs.link

### Params:

* **string** *srcpath* path to source file
* **string** *dstpath* path to destination

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## symlink(srcpath, dstpath, type)

q-wrapper for fs.symlink

### Params:

* **string** *srcpath* path to source file
* **string** *dstpath* path to destination file
* **string** *type* can be set to 'dir', 'file', or 'junction' (default is 'file'), only for Windows platform

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## readlink(path)

q-wrapper for fs.readlink

### Params:

* **string** *path* path to link file

### Return:

* **external:Promise** On success the promise will be resolved with string content of link file.<br> On error the promise will be rejected with an {@link Error}.

## realpath(path, cache)

q-wrapper for fs.realpath

### Params:

* **string** *path* path to some location
* **object** *cache* object literal of mapped paths that can be used to force a specific path resolution or avoid additional fs.stat calls for known real paths

### Return:

* **external:Promise** On success the promise will be resolved with string containg resolved path.<br> On error the promise will be rejected with an {@link Error}.

## unlink(path)

q-wrapper for fs.unlink

### Params:

* **string** *path* path to file

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## rmdir(path)

q-wrapper for fs.rmdir

### Params:

* **string** *path* path to directory

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## mkdir(path, mode)

q-wrapper for fs.mkdir

### Params:

* **string** *path* path to directory
* **integer** *mode* value of mode in octal or integer format, defaults to 0777

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## readdir(path, cache)

q-wrapper for fs.readdir

### Params:

* **string** *path* path to directory
* **object** *cache* object literal of mapped paths that can be used to force a specific path resolution or avoid additional fs.stat calls for known real paths

### Return:

* **external:Promise** On success the promise will be resolved with array of the names of the files in the directory excluding '.' and '..'.<br> On error the promise will be rejected with an {@link Error}.

## close(fd)

q-wrapper for fs.close

### Params:

* **number** *fd* file descriptor

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## open(path, flags, mode)

q-wrapper for fs.open

### Params:

* **string** *path* path to file
* **string** *flags* specify mode in which we open file, acceptable values:                        'r' - Open file for reading. An exception occurs if the file does not exist.
                       'r+' - Open file for reading and writing. An exception occurs if the file does not exist.
                       'rs' - Open file for reading in synchronous mode. Instructs the operating system to bypass the local file system cache.
                       This is primarily useful for opening files on NFS mounts as it allows you to skip the potentially stale local cache. It has a very real impact on I/O performance so don't use this flag unless you need it.
                       Note that this doesn't turn fs.open() into a synchronous blocking call. If that's what you want then you should be using fs.openSync()
                       'rs+' - Open file for reading and writing, telling the OS to open it synchronously. See notes for 'rs' about using this with caution.
                       'w' - Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
                       'wx' - Like 'w' but fails if path exists.
                       'w+' - Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
                       'wx+' - Like 'w+' but fails if path exists.
                       'a' - Open file for appending. The file is created if it does not exist.
                       'ax' - Like 'a' but fails if path exists.
                       'a+' - Open file for reading and appending. The file is created if it does not exist.
                       'ax+' - Like 'a+' but fails if path exists.
* **integer** *mode* value of mode in octal or integer format, defaults 0666

### Return:

* **external:Promise** On success the promise will be resolved with file descriptor (fd).<br> On error the promise will be rejected with an {@link Error}.

## utimes(path, atime, mtime)

q-wrapper for fs.utimes

### Params:

* **string** *path* path to file
* **integer** *atime* access time
* **integer** *mtime* modification time

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## futimes(fd, atime, mtime)

q-wrapper for fs.futimes

### Params:

* **number** *fd* file descriptor
* **integer** *atime* access time
* **integer** *mtime* modification time

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## fsync(fd)

q-wrapper for fs.fsync

### Params:

* **number** *fd* file descriptor

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## write(fd, buffer, offset, length, position)

q-wrapper for fs.write</br>
Original fs.write method return 3 arguments to callback: error, written & buffer. </br> Author of this wrapper wants to stick to q mantra as close as possible so every method provide to resolver 1 argument. Resolving method combines 2 arguments into one: {written: result, buffer: buffer}

### Params:

* **number** *fd* file descriptor
* **string|buffer** *buffer* buffer of data that have to be written to the file
* **integer** *offset* determine the starting point of datafrom buffer to be written
* **integer** *length* specifying the number of bytes to read
* **integer** *position* refers to the offset from the beginning of the file where this data should be written. If position is null, the data will be written at the current position (defaults to null)

### Return:

* **external:Promise** On success the promise will be resolved with object in following notation {written: result, buffer: buffer}.<br> On error the promise will be rejected with an {@link Error}.

## read(fd, buffer, offset, length, position)

q-wrapper for fs.read</br>
Original fs.read method return 3 arguments to callback: error, bytesRead & buffer. </br> Author of this wrapper wants to stick to q mantra as close as possible so every method provide to resolver 1 argument. Resolving method combines 2 arguments into one: {bytesRead: bytesRead, buffer: buffer}

### Params:

* **number** *fd* file descriptor
* **string|buffer** *buffer* is the buffer that the data will be written to
* **integer** *offset* offset in the buffer to start writing at
* **integer** *length* specifying the number of bytes to read
* **integer** *position* specifying where to begin reading from in the file. If position is null, data will be read from the current file position (defaults to null)

### Return:

* **external:Promise** On success the promise will be resolved with object in following notation {bytesRead: bytesRead, buffer: buffer}.<br> On error the promise will be rejected with an {@link Error}.

## readFile(path, options)

q-wrapper for fs.readFile

### Params:

* **string** *path* path to file
* **object** *options* can contain one of following options: encoding (string, defaults to null), flag (string, defaults to 'r')

### Return:

* **external:Promise** On success the promise will be resolved with readed data.<br> On error the promise will be rejected with an {@link Error}.

## writeFile(path, data, options)

q-wrapper for fs.writeFile

### Params:

* **string** *path* path to file
* **string|buffer** *data* data to be written to file
* **object** *options* can contain one of following options: encoding (string, defaults to 'utf8'), mode (integer or octal, defaults to 0666), flag (string, defaults to 'w')

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## appendFile(path, data, options)

q-wrapper for fs.appendFile

### Params:

* **string** *path* path to file
* **string|buffer** *data* data to be written to file
* **object** *options* can contain one of following options: encoding (string, defaults to 'utf8'), mode (integer or octal, defaults to 0666), flag (string, defaults to 'a')

### Return:

* **external:Promise** On success the promise will be resolved with true.<br> On error the promise will be rejected with an {@link Error}.

## watchFile(path, options)

q-wrapper for fs.watchFile</br>
Original fs.watchFile method accept listener as one of arguments. This listener is used as a callback in case of any change made to the watched file.</br> By utilizing q notification capabilities we are able to mimic above listener behavior without loosing beauty of q premises. lease use .progress(function(result_object){...}); notation to receive events regarding watched file.</br> Method return 2 arguments to listener: current_stat & previous_stat. Author of this wrapper wants to stick to q manta as close as possible so this method provide to progress listener 1 argument. Resolver method combines 2 arguments into one: {current: current_stat, previous: previous_stat}

### Params:

* **string** *path* path to file
* **object** *options* can contain one of following options: persistent (boolean, defaults to true), interval (integer, defaults to 5007 miliseconds)

### Return:

* **external:Promise** On event this promisse will be notified with object in following notation {current: current_stat, previous: previous_stat}.

## unwatchFile(path)

q-wrapper for fs.unwatchFile</br>
In its pure form this method really don't require wrapper, but because we used q progress as a listenerit will be difficult for user to provide proper function to detach watcher from file. This method will remove all listeners.

### Params:

* **string** *path* path to watched file

### Return:

* **boolean** Always return true.

## watch(path, options)

q-wrapper for fs.watch</br>
This method is very specific and its port is not so straightforward. To keep simplicity of q promises & to avoid injecting any extra argument to deffered object this method return object that contains promise & object of type fswatch. Usage of promise is straightforward. Object of type fswatch have to be closed to delete handler.</br>
E.g.
var a = require('qfs').watch('path/to/file.txt');
a.promise.progress(function(...){...}).error(function(...){...});
...
a.handler.close();
</br>
Original fs.watch method accept listener as one of arguments. This listener is used as a callback in case of any change made to the watched file. By utilizing q notification capabilities we are able to mimic above listener behavior without loosing beauty of q premises. Please use .progress(function(result_object){...}); notation to receive events regarding watched file.</br>
Resolver method return 1 argument to progress listener: filename. This progress event / call == 'change' of file & is not specified (can be related to any type of action against watched file).</br>
Author of this wrapper wants to stick to q manta as close as possible so this method provide error event only once. After that event user is expected to close handler on its own.

### Params:

* **string** *path* path to file
* **object** *options* can contain one of following options: persistent (boolean, defaults to true)

### Return:

* **external:Promise** Returns object with the following notation: {handler: handler, promise:promise}. On event this promisse will be notified with object in following notation {event: event, filename: filename}. On error the promise will be rejected with an {@link Error}. Please remember to close handler after error.

## exists(path)

q-wrapper for fs.exists

### Params:

* **string** *path* path to file

### Return:

* **external:Promise** On success the promise will be resolved with true or false depanding on fact if file exists.

## createReadStream(path, options)

q-wrapper for fs.createReadStream</br>
In its pure form this method really don't require wrapper, created for convinience of usage

### Params:

* **string** *path* path to file
* **object** *options* can contain one of following options: flags (string, defaults to 'r'), encoding (string, defaults to null), fd (file, defaults to null), mode (integer or octal, defaults to 0666), autoClose (boolean, defaults to true)

### Return:

* **ReadStream** Returns read stream object

## createWriteStream(path, options)

q-wrapper for fs.createReadStream</br>
In its pure form this method really don't require wrapper, created for convinience of usage

### Params:

* **string** *path* path to file
* **object** *options* can contain one of following options: flags (string, defaults to 'w'), encoding (string, defaults to null), mode (integer or octal, defaults to 0666)

### Return:

* **WriteStream** Returns read stream object

<!-- End qfs.js -->
