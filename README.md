grunt-template-replace
--

Copies file content to a given template and writes them to disk. You can place a marker in the template where the content of the given files are placed. This is use full when you create HTML filed out of Markdown and want to wrap the result in a master layout.

<!-- TOC -->

- [Getting Started](#getting-started)
- [The "template-replace" task](#the-template-replace-task)
    - [Overview](#overview)
    - [Options](#options)
        - [options.template](#optionstemplate)
        - [options.marker](#optionsmarker)
    - [Usage Examples](#usage-examples)
- [Contributing](#contributing)
- [Release History](#release-history)

<!-- /TOC -->

## Getting Started
This plugin requires Grunt `^1.0.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-template-replace --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-template-replace');
```

## The "template-replace" task

### Overview

In your project's Gruntfile, add a section named `template-replace` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    "template-replace": {
        your_target: {
        // Target-specific file lists and/or options go here.
        },
    },
});
```

### Options

#### options.template
Type: `String`
Default value: ``

Path to master template file. This used for every processed file in this target.

#### options.marker
Type: `String`
Default value: `<!-- REPLACE -->`

Marker which will be replaced with the content of given files.

### Usage Examples

This will use `src/template.html` as the master template file and will create new files in `tmp/`

```js
grunt.initConfig({
    'template-replace': {
        'test': {
            'options': {
                'template': 'src/template.html',
                'marker': '<!-- REPLACE -->'
            },
            'files': [{
                expand: true,
                cwd: "src/",
                src: ["page-*.html"],
                dest: "tmp/",
                ext: ".html"
            }]
        },
    },
});
```

*Input Files*

`src/template.html`:
```html
<html lang="en-EN">
<head>
  <title>Sample Page</title>
</head>
<body>
    <!-- REPLACE -->
</body>
</html>
```

`src/page-a.html`:
```html
<h1>Page A</h1>
```

`src/page-b.html`:
```html
<h1>Page B</h1>
```

*Output Files*

`tmp/page-a.html`:
```html
<html lang="en-EN">
<head>
  <title>Sample Page</title>
</head>
<body>
    <h1>Page A</h1>
</body>
</html>
```

and `tmp/page-b.html` with `<h1>Page A</h1>` in the body tag.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 1.0.0 - Init project.