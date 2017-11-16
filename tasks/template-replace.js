module.exports = function(grunt) {
    
        var description = 'Interpolate template files with any data you provide ' +
            'and save the result to another file.';
    
        grunt.registerMultiTask('template-replace', description, function() {
            // Merge task-specific and/or target-specific options with these defaults:
            var options = this.options({
                'template': '',
                'marker': '<!-- REPLACE -->'
            });
    
            if (!grunt.file.exists(options.template)) {
                grunt.log.warn('Template Source file `' + options.template + '` not found.');
                return false;
            }
            var template = grunt.file.read(options.template);
            
            // Iterate over all specified file groups.
            this.files.forEach(function(file) {
                // Concat specified files.
                var src = file.src.filter(function(filePath) {
                    // Warn on and remove invalid source files.
                    if (!grunt.file.exists(filePath)) {
                        grunt.log.warn('Source file `' + filePath + '` not found.');
                        return false;
                    } else {
                        return true;
                    }
                });
                if (!src.length) {
                    grunt.log.warn(
                        'Destination `' + file.dest +
                        '` not written because `src` files were empty.'
                    );
                    return;
                }

                var content = src.map(function(filePath) {
                    // Read file source.
                    return grunt.file.read(filePath);
                }).join('\n');

                var result = template.replace(options.marker, content);

                // Write the destination file
                grunt.file.write(file.dest, result);
    
                // Print a success message
                grunt.log.writeln('File `' + file.dest + '` created.');
            });
        });
    
    };