module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "jquery/dist/jquery.min.js",
                    "bootstrap/dist/**/*",
                ],
                "dest": "vendors/",
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['copy']);

};