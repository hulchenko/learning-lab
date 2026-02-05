'node -v'

'npm -v'

'npm init' (to initialize package.json)

'npm install --save-dev webpack webpack-cli' OR 'npm i -g webpack webpack-cli'

create src folder (for all of the working files)

create dist folder (for all of the webpack compiled files from working files)

create and configure webpack.config.js (for node.js to initialize)(init setup usually described on the website)

initialize webpack: 'webpack'

check dist folder for bundle.js to appear

test working directory with 'node dist/bundle.js' command

add: "dev": "webpack --mode development" and "build": "webpack --mode production" to package.json to run commands: 'npm run build' or 'npm run dev' to switch between expanded and compressed code inside bundle.js

create /modules folder with configured module files to import into main js file (just like Sass)

run 'npm run dev'(expanded) OR 'npm run build'(compressed) & 'node dist/bundle.js' to test connectivity and performance

run 'npm install --save-dev html-webpack-plugin' to install HTML plugin

in package.json add configuration for HTML plugin (it will auto create indicated html files, or use those indicated as a template)

run 'npm install --save jquery'

to use jquery or any other library we need to import it. in this example we will import into './modules/header.component.js', same place we will code in.

to let npm automatically watch and apply changes, we've created script: 'dev:watch": "webpack --mode development --watch'. To run 'npm run dev:watch' and the process will run continuously and update on save. (ctrl + C to exit)

we can also use pre-processors(loaders) with webpack, for example: 'npm install --save-dev css-loader'(to receive css code, but NOT to apply it)

then, to apply CSS code: 'npm install --save-dev style-loader'.

webpack recognizes imports inside CSS just like Sass. Also css path needs to be indicated inside index.js file (default js file). Applies style inside HTML head element.

in order for css to be compiled into final distribution folder, as a separate file, just like index.html, we would need to add css extract plugin: 'npm install --save-dev mini-css-extract-plugin'

then, make changes inside webpack.config.js, change 'style-loader' to 'MiniCssExtractPlugin.loader' and add extra line to plugins section within as well. This optimizes code and creates 1 reference line in HTML instead of big <style> list in <head>

to minimize css file, just like we do with 'npm run build', we need to: 'npm install css-minimizer-webpack-plugin --save-dev'

update webpack.config.js file with documentation provided on webpack website

after this, our js optimizer will reset and will not work by default, we would have to add a new JS optimizer plugin: 'npm install terser-webpack-plugin --save-dev'; update our webpack.config.js and run to test 'npm run build' to see compressed results on css/html/js files.

P.S. in optimization field, we can keep 'minimize: true' to keep it minimized at all times. This is overwriting 'npm run dev'

'npm install -D webpack-dev-server' is used as local server to dynamically update browser's page to reflect changes, similar to 'dev:watch' script that we've created(?)

After, need to update webpack.config.js:
devServer: {
contentBase: path.join(\_\_dirname, 'dist'),
compress: true,
port: 4200,
},

After, need to update package.json, inside 'script' object:
"start:dev": "webpack serve --open" < '--open' is to open browser's window right away.

In order for our code to be compatible with ALL devices, including old ones that read only up until ES5, we will setup Babel tool. Our ES6 code will get compiled into ES5 for general compatibility.

To setup Babel, run: 'npm install --save-dev babel-loader @babel/core' and 'npm install @babel/preset-env --save-dev'

Follow Babel's guideline for webpack to finalize installation

To work with pre-processors Less and Sass:
#1 for Less: 'npm install less less-loader --save-dev'.Update webpack.config.js(important to indicate css extract plugin) and add index.less into index.js file.
#2 for Sass: 'npm install node-sass' and 'npm install sass-loader sass webpack --save-dev'
Update webpack.config.js and index.sass into index.js file.

To work with React:
#1 'npm i -S react react-dom'
#2 create App.js file to code React inside
#3 input following lines inside index.js:
import React from 'react';
import { render } from 'react-dom';
render(<App />, document.getElementById('app'));
#4 add presets to Babel for React readability: 'npm install --save-dev @babel/preset-react'.
#5 inside babel.config.json file add presets config: "@babel/preset-react"
#6 jQuery and React don't run together from different files without causing issues. To run React - we need to replace jQuery components into App.js, where React code is.

To work with TypeScript:
#1 'npm install --save-dev @babel/preset-typescript'
#2 add presets to babel.config.json: "@babel/preset-typescript"
#3 update webpack.config.js rules, add ts to js or separately.
#4 create TS file
#5 add import inside index.js
#6 inside webpack.config.js, add separate field 'extensions', where we can add both .js and .ts extensions to avoid using them upon import inside index.js
