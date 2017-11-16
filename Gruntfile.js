module.exports = function (grunt) {
    // Time how long tasks take. Can help when optimizing build times
    require("time-grunt")(grunt);

    // Automatically load required grunt tasks
    require("jit-grunt")(grunt, {
        useminPrepare: "grunt-usemin"
    });

    grunt.initConfig({

        'clean': {
            'tests': ['tmp'],
        },

        // Configuration to be run and tested
        'template-replace': {
            'test-1': {
                'options': {
                    'template': 'test/fixtures/template.html',
                    'marker': '<!-- REPLACE -->'
                },
                'files': [{
                    expand: true,
                    cwd: "test/fixtures",
                    src: ["test-1.html"],
                    dest: "tmp/",
                    ext: ".html"
                }]
            },
            'test-2': {
                'options': {
                    'template': 'test/fixtures/template.html',
                    'marker': '<!-- REPLACE -->'
                },
                'files': [{
                    expand: true,
                    cwd: "test/fixtures",
                    src: ["test-2*.html"],
                    dest: "tmp/",
                    ext: ".html"
                }]
            },
        },

        // Unit tests
        'nodeunit': {
            'tests': ['test/*_test.js']
        }

    });

    grunt.loadTasks('tasks');
    grunt.registerTask('test', ['clean', 'template-replace', 'nodeunit']);
    grunt.registerTask('default', ['test']);
};