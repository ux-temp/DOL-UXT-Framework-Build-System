module.exports = function( grunt ) {
    grunt.registerTask( "index", "Generate index.html depending on configuration", function() {

        // Get configs from the grunt file.
        var index = grunt.config('index'),
            template = grunt.file.read(index.src),
            cssFiles = index.cssBundle,
            cssPFiles = index.cssPBundle,
            jsFiles = index.jsBundle,
            cssIncludes,
            cssPIncludes,
            jsIncludes;

        // Dynamic build object
        var tplData= {};

        // Add the page title from the grunt config
        tplData['title'] = index.title;
        tplData['assetSuffix'] = index.assetSuffix;

        // Create the CSS Bundle
        if(cssFiles && cssFiles.length) {
            cssIncludes = cssFiles.map(function(v) {
                return '<link rel="stylesheet" type="text/css" href="' + v + '" />\n';
            }).join('');
        }
        tplData.css = cssIncludes;

        // Create the print CSS Bundle
        if(cssPFiles && cssPFiles.length) {
            cssPIncludes = cssPFiles.map(function(v) {
                return '<link rel="stylesheet" media="print" type="text/css" href="' + v + '" />\n';
            }).join('');
        }
        tplData.cssp = cssPIncludes;

        // Create the JS Bundle
        if(jsFiles && jsFiles.length) {
            jsIncludes = jsFiles.map(function(v) {
                return '<script src="' + v + '"></script>\n';
            }).join('');
        }
        tplData.js = jsIncludes;

        grunt.file.write(index.dest, grunt.template.process(template, {data:tplData}));
 
        //grunt.log.writeln('Generated \'' + targetFile + '\' from \'' + conf.src + '\'');
        grunt.log.writeln('Done.');
    });
}