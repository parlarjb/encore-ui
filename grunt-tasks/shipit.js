/*jshint node:true */
module.exports = function (grunt) {
    grunt.registerTask('shipit', 'Ships code to prod', function (versionType, updateDemo) {
        var validTypes = ['major', 'minor', 'patch'];
        var tasks = [];

        if (validTypes.indexOf(versionType) > -1) {
            // increment the version
            tasks.push('bump-only:' + versionType);

            // set the last tag, for changelog to use
            tasks.push('shell:latestTag');

            // create changelog
            tasks.push('changelog');

            // increment version in readme
            tasks.push('replace:readme');

            // build the code
            tasks.push('default');

            // push files to prod
            //tasks.push('cloudfiles:alpha');

            // commit version increment
            tasks.push('bump-commit');
            
            // push rx-page-objects to npm
            tasks.push('rxPageObjects');

            if (updateDemo === 'updateDemo') {
                // update gh-pages branch, i.e. the demo app
                tasks.push('gh-pages:ghPages');
            }

            // update bower repo
            tasks.push('bower');

            // shipit squirrel
            tasks.push('squirrel');

            grunt.task.run(tasks);
        } else {
            grunt.fatal('Must pass in version type major/minor/patch. E.g. `grunt shipit:patch`');
        }
    });
};
