# Getting Started

## Installation

### Easy Setup: Clone the EncoreUI-Template

[EncoreUI-Template](https://github.com/rackerlabs/encore-ui-template) is a project template to help get things started with new EncoreUI based apps. You must be a Rackspace employee in order to access the repository.

To use, simply copy the repo in to your new project and run an NPM/Bower install. All EncoreUI files will be included after the dependencies have been installed.

### Manual Setup: Create a New Angular Project

If you're unable to (or prefer not to) use the EncoreUI-Template, you need to manually create a new Angular project. Once set up, add the EncoreUI files to your page either through the CDN or Bower:

#### CDN

To use the CDN in your app, do the following:

1. Install and include the dependencies listed in [bower.json](./bower.json) (items listed in devDependencies are not required)

2. Include the Encore CSS file in the `<head>` of your index.html (before the CSS for your app):

    ```
    <link rel="stylesheet" href="https://95c7050854423f809e66-6999ba0e7a4f47d417515fb3f08fa9b8.ssl.cf1.rackcdn.com/encore-ui-1.24.0-v1.18.0-1-g0c04c-d.0-v1.14.0-2-gd9ae-d.0.min.css">
    ```

3. Include the Encore JS file (**Dependencies must be included before this line**):

    ```
    <script src="https://95c7050854423f809e66-6999ba0e7a4f47d417515fb3f08fa9b8.ssl.cf1.rackcdn.com/encore-ui-tpls-1.24.0-v1.18.0-1-g0c04c-d.0-v1.14.0-2-gd9ae-d.0.min.js"></script>
    ```

4. Add 'encore.ui' as a dependency in your app.js module declaration. For example:

    ```
    angular.module('myApp', ['encore.ui']);
    ```

#### Bower

If you have a static server that you'd like to build your files off of, you can install EncoreUI via [Bower](http://bower.io):

```
bower install encore-ui
```

## Using Components

Now that EncoreUI is installed, you may begin using its components.

Very likely, the first component you'll want to get in to is `<rx-app>`. If you used the EncoreUI-Template, rxApp is already set up in the index.html file. If not, you'll want to read through [the rxApp documentation](http://rackerlabs.github.io/encore-ui/#/component/rxApp) for more information on its use (including how to use `<rx-page>`).

From there, just start building pages, using whatever EncoreUI component is needed.

## Using EncoreUI without Angular

While the intention of EncoreUI is for it to be used in conjunction with AngularJS, it is possible to use just the styles (similar to how Twitter Bootstrap can be used without JS).

The entirety of the EncoreUI CSS is available via the main CSS file. To use, simply include it on your page.

> Disclaimer: At any point in time, an HTML change to the Angular directive template can change the HTML needed for the CSS to work properly. Be sure when upgrading major/minor versions of the CSS file to check [the changelog](../CHANGELOG.md) for details on what has been updated.

## Further Guidance

For further help, reach out to the EncoreUI team via [our support information](https://github.com/rackerlabs/encore-ui#support).
