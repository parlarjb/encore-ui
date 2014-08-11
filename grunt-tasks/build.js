module.exports = function (grunt) {
    grunt.registerTask('build', 'Create build files', function () {

        grunt.task.run(['clean:build', 'config', 'concat:dist', 'concat:distTpls', 'less',
            'copy:demoreadme', 'copy:demohtml', 'copy:demoassets', 'copy:componentImages',
            'copy:font', 'replace:wraith']);
    });
};
