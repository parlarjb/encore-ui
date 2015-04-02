/*jshint node:true*/
module.exports = function (grunt) {
    return {
        rxPageObjects: {
            command: 'npm pack',
            options: {
                stdout: true,
                execOptions: {
                    cwd: 'utils/rx-page-objects'
                }
            }
        },

        wraith: {
            command: 'wraith capture config',
            options: {
                stdout: true,
                execOptions: {
                    cwd: '<%= config.wraith %>'
                }
            }
        },

        npmPublish: {
            command: 'npm publish ./rx-page-objects --tag <%= pkg.version %>',
            options: {
                stdout: true,
                execOptions: {
                    cwd: 'utils/'
                }
            }
        },

        latestTag: {
            command: 'git describe --abbrev=0',
            options: {
                callback: function (err, stdout, stderr, cb) {
                    grunt.config('config.latestTag', stdout.replace('\n', ''));
                    cb();
                }
            }
        }
    };
};
