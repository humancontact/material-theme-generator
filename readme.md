# Material CSS generator

This is a cloned version of https://glitch.com/~material-theme-builder

The purpose of this project is to generate a `bundled.css` for Material IO theme - which would be useful for external projects that are not using Sass or Webpack. This compiled CSS will include styles for all components.

https://material.io/develop/web/docs/getting-started/


## Getting Started

`npm install`

Generate CSS: `webpack` or `npm run build`

Preview Theme: `npm run start`


To edit theme colors, update SASS variables in `my-theme.scss`.

Components will need to be initialized - follow material IO documentation or refer to https://material.io/develop/web/components/auto-init/


## Using theme for another project

After generating `dist/bundle.css`, move file to your personal project using <style> / enqueue / or however you include your CSS scripts.
