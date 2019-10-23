# Material CSS generator

This is a cloned version of https://glitch.com/~material-theme-builder

The purpose of this project is to generate a `bundled.css` for Material IO theme - which would be useful for external projects that are not using Sass or Webpack.


## Getting Started

`npm install`

Generate CSS: `webpack` or `npm run build`

Preview Theme: `npm run start`


To edit theme colors, update SASS variables in `my-theme.scss`


## Using theme for another project

After generating `dist/bundle.css`, move file to your personal project using <style> / enqueue / or however you include your CSS scripts.
