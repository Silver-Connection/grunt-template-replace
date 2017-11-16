var grunt = require('grunt');

/*
	======== A Handy Little Nodeunit Reference ========
	https://github.com/caolan/nodeunit

	Test methods:
		test.expect(numAssertions)
		test.done()
	Test assertions:
		test.ok(value, [message])
		test.equal(actual, expected, [message])
		test.notEqual(actual, expected, [message])
		test.deepEqual(actual, expected, [message])
		test.notDeepEqual(actual, expected, [message])
		test.strictEqual(actual, expected, [message])
		test.notStrictEqual(actual, expected, [message])
		test.throws(block, [error], [message])
		test.doesNotThrow(block, [error], [message])
		test.ifError(value)
*/

var compare = function(inputFile, expectedOutputFile, description, test) {
	var actual = grunt.file.read(inputFile);
	var expected = grunt.file.read(expectedOutputFile);
	test.equal(actual, expected, description);
};

exports.templateReplace = {
	'simple-replace': function(test) {
		compare(
			'tmp/test-1.html',
			'test/expected/test-1.html',
			'Simple replace',
			test
		);
		test.done();
	},
	'simple-replace-multi-file': function(test) {
		compare(
			'tmp/test-2a.html',
			'test/expected/test-2a.html',
			'Multi file A',
			test
		);
		compare(
			'tmp/test-2b.html',
			'test/expected/test-2b.html',
			'Multi file B',
			test
		);
		test.done();
	},
};