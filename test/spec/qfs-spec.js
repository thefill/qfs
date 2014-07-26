/**
 * Note: not every method tested. Have to finish.
 */

var qfs = require('../../qfs');
var playground = "test/data/";


describe("Wrapper for core fs method", function () {
	var originalTimeout;
	beforeEach(function () {
		// extending test time to 10s
		originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
	});

	//test for qfs.open
	describe("qfs.open", function () {
		it("should return error if file don't exists", function (done) {
			qfs.open(playground + 'file-dont-exist.txt', 'r', 0666)
				.fail(function (error) {
					expect(typeof error).toBe('object');
					done();
				});
		});
		it("should create file & return file descriptor if file in provided path don't exists", function (done) {
			qfs.open(playground + 'file-exist.txt', 'a+', 0666)
				.then(function (file_descriptor) {
					expect(typeof file_descriptor).toBe('number');
					qfs.close(file_descriptor)
						.then(function () {
							done();
						});
				});
		});
	});

	//test for qfs.rename
	describe("qfs.rename", function () {
		it("should rename file", function (done) {
			qfs.open(playground + 'test.txt', 'a+', 0666)
				.then(function (file_descriptor) {
					qfs.rename(playground + 'test.txt', playground + 'rename-test.txt')
						.then(function (result) {
							qfs.close(file_descriptor)
								.then(function () {
									qfs.exists(playground + 'rename-test.txt')
										.then(function (result) {
											expect(result).toBe(true);
											done();
										});
								});
						});
				});
		});
		it("should return error if source file dont exists", function (done) {
			qfs.rename(playground + 'file-dont-exist.txt', playground + 'file-dont-exist2.txt')
				.fail(function (error) {
					expect(typeof error).toBe('object');
					done();
				});
		});
	});

	//test for qfs.rename
	describe("qfs.rename", function () {
		it("should rename file", function (done) {
			qfs.open(playground + 'test.txt', 'a+', 0666)
				.then(function (file_descriptor) {
					qfs.rename(playground + 'test.txt', playground + 'rename-test.txt')
						.then(function (result) {
							qfs.close(file_descriptor)
								.then(function () {
									qfs.exists(playground + 'rename-test.txt')
										.then(function (result) {
											expect(result).toBe(true);
											done();
										});
								});
						});
				});
		});
		it("should return error if source file dont exists", function (done) {
			qfs.rename(playground + 'file-dont-exist.txt', playground + 'file-dont-exist-2.txt')
				.fail(function (error) {
					expect(typeof error).toBe('object');
					done();
				});
		});
	});

	//test for qfs.stat
	describe("qfs.stat", function () {
		it("should return object of type fs.Stats", function (done) {
			qfs.stat(playground + 'rename-test.txt')
				.then(function (result) {
					expect(typeof result).toBe('object');
					done();
				});
		});
		it("should return error if file dont exists", function (done) {
			qfs.stat(playground + 'file-dont-exist.txt')
				.fail(function (error) {
					expect(typeof error).toBe('object');
					done();
				});
		});
	});

	//test for qfs.lstat
	describe("qfs.lstat", function () {
		it("should return object of type fs.Stats", function (done) {
			qfs.lstat(playground + 'rename-test.txt')
				.then(function (result) {
					expect(typeof result).toBe('object');
					done();
				});
		});
		it("should return error if file dont exists", function (done) {
			qfs.lstat(playground + 'file-dont-exist.txt')
				.fail(function (error) {
					expect(typeof error).toBe('object');
					done();
				});
		});
	});

	//test for qfs.fstat
	describe("qfs.fstat", function () {
		it("should return object of type fs.Stats", function (done) {
			qfs.open(playground + 'rename-test.txt', 'r', 0666)
				.then(function (file_descriptor) {
					qfs.fstat(file_descriptor)
						.then(function (result) {
							expect(typeof result).toBe('object');
							qfs.close(file_descriptor)
								.then(function () {
									done();
								})
						});
				});
		});
	});

	//test for qfs.realpath
	describe("qfs.realpath", function () {
		it("should return resolved path", function (done) {
			qfs.realpath(playground + 'rename-test.txt')
				.then(function (result) {
					expect(typeof result).toBe('string');
					done();
				});
		});
		it("should return error wheyn file not exists", function (done) {
			qfs.realpath(playground + 'file-dont-exist.txt')
				.fail(function (err) {
					expect(typeof err).toBe('object');
					done();
				});
		});
	});

	//test for qfs.exists
	describe("qfs.exists", function () {
		it("should return true if file exists", function (done) {
			qfs.exists(playground + 'file-exist.txt')
				.then(function (result) {
					expect(result)
						.toBe(true);
					done();
				});
		});
		it("should return false if file doesn't exists", function (done) {
			qfs.exists(playground + 'file-dont-exist.txt')
				.then(function (result) {
					expect(result).toBe(false);
					done();
				});
		});
	});

	//test for qfs.mkdir
	describe("qfs.mkdir", function () {
		it("should create dir", function (done) {
			qfs.mkdir(playground + 'dir-test')
				.then(function (result) {
					qfs.exists(playground + 'dir-test')
						.then(function (result) {
							expect(result).toBe(true);
							done();
						});
				});
		});
	});

	//test for qfs.readdir
	describe("qfs.readdir", function () {
		it("should return array of file names", function (done) {
			qfs.open(playground + 'dir-test/' + 'file-1.txt', 'a+', 0666)
				.then(function (result) {
					qfs.readdir(playground + 'dir-test/')
						.then(function (result) {
							expect(result instanceof Array).toBe(true);
							expect(result.length).toEqual(1);
							done();
						});
				});
		});
	});

	//test for qfs.unlink
	describe("qfs.unlink", function () {
		it("should remove file if exists", function (done) {
			qfs.unlink(playground + 'dir-test/file-1.txt')
				.then(function (result) {
					qfs.exists(playground + 'dir-test/file-1.txt')
						.then(function (result) {
							expect(result).toBe(false);
							done();
						});
				});
		});
	});

	//test for qfs.rmdir
	describe("qfs.rmdir", function () {
		it("should remove dir if exists", function (done) {
			qfs.rmdir(playground + 'dir-test')
				.then(function (result) {
					qfs.exists(playground + 'dir-test')
						.then(function (result) {
							expect(result).toBe(false);
							done();
						});
				});
		});
	});

	//test for qfs.write
	describe("qfs.write", function () {
		var string = 'The quick brown fox jumps over the lazy dog';
		var buffer = new Buffer(string, 'utf8');
		var buffer_size = Buffer.byteLength(string, 'utf8');
		it("should write data to file", function (done) {
			qfs.open(playground + 'write-test.txt', 'w+', 0666)
				.then(function (file_descriptor) {
					qfs.write(file_descriptor, buffer, 0, buffer_size)
						.then(function (result) {
							expect(result.written).toEqual(buffer_size);
							qfs.close(file_descriptor)
								.then(function () {
									qfs.stat(playground + 'write-test.txt')
										.then(function (stat) {
											expect(stat.size).toEqual(buffer_size);
											done();
										});
								});
						});
				});
		});
	});

	//test for qfs.read
	describe("qfs.read", function () {
		var string = 'The quick brown fox jumps over the lazy dog';
		it("should read data from file", function (done) {
			qfs.open(playground + 'write-test.txt', 'r', 0666)
				.then(function (file_descriptor) {
					qfs.fstat(file_descriptor)
						.then(function (stat) {
							var buffer_size = stat.size;
							qfs.read(file_descriptor, new Buffer(buffer_size), 0, buffer_size)
								.then(function (result) {
									expect(result.buffer.toString('utf8')).toEqual(string);
									done();
									qfs.close(file_descriptor)
										.then(function () {
											qfs.stat(playground + 'write-test.txt')
												.then(function (stat) {
													expect(stat.size).toEqual(buffer_size);
													done();
												});
										});
								})
						});
				});
		});
	});

	//test for qfs.readFile
	describe("qfs.readFile", function () {
		var string = 'The quick brown fox jumps over the lazy dog';
		it("should read data from file", function (done) {
			qfs.readFile(playground + 'write-test.txt', {
				encoding: 'utf8'
			})
				.then(function (result) {
					expect(result).toEqual(string);
					done();
				});
		});
	});

	//test for qfs.writeFile
	describe("qfs.writeFile", function () {
		var string = 'Lazy dog tried to catch quick brown fox but failed.';
		it("should write data to file", function (done) {
			qfs.writeFile(playground + 'write-test.txt', string, {
				encoding: 'utf8'
			})
				.then(function (result) {
					qfs.readFile(playground + 'write-test.txt', {
						encoding: 'utf8'
					})
						.then(function (result) {
							expect(result).toEqual(string);
							done();
						});
				});
		});
	});

	//test for qfs.appendFile
	describe("qfs.appendFile", function () {
		var string = 'Lazy dog tried to catch quick brown fox but failed.',
			addition = ' Next time he will use jetpack!';
		it("should write data to file", function (done) {
			qfs.appendFile(playground + 'write-test.txt', addition, {
				encoding: 'utf8'
			})
				.then(function (result) {
					qfs.readFile(playground + 'write-test.txt', {
						encoding: 'utf8'
					})
						.then(function (result) {
							expect(result).toEqual(string + addition);
							done();
						});
				});
		});
	});

	//test for qfs.watchFile
	describe("qfs.watchFile", function () {
		var string = ' Or maybe not!';
		it("should notify about file change", function (done) {
			qfs.watchFile(playground + 'write-test.txt')
				.progress(function (result) {
					expect(typeof result).toBe('object');
					expect(typeof result.current).toBe('object');
					expect(typeof result.previous).toBe('object');
					qfs.unwatchFile(playground + 'write-test.txt');
					done();
				});
			qfs.appendFile(playground + 'write-test.txt', string);
		});
	});

	//test for qfs.watch
	describe("qfs.watch", function () {
		var string = ' Who knows?!';
		it("should notify about file change", function (done) {
			var watcher = qfs.watch(playground);
			watcher.promise.progress(function (result) {
					expect(result).toEqual('write-test.txt');
					watcher.handler.close();
					done();
				});
			qfs.appendFile(playground + 'write-test.txt', string);
		});
	});



	afterEach(function () {
		jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
	});
});
