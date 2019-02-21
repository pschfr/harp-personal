// Require dependencies for this file
const path = require('path');
const webpack = require('webpack');

// Common Webpack settings go here
module.exports = {
	// Input file
	entry: './public/_js/index.js',
	// Output bundle location
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'public/js')
	},
	// Needed for Bootstrap, Popper.js, and jQuery to resolve properly
	plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
		   jQuery: "jquery",
		   Popper: "popper.js",
		   Bootstrap: "bootstrap"
       })
    ]
}
