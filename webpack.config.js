module.exports={
	entry:'./src/index.js',
	output:{
		filename:'bundle.js'
	},
	"scripts": {
    "start": "webpack-dev-server"
 	 },
    module:{
	  loaders:[
	  	{
		test:/\.js[x]?$/,
		exclude: /node_modules/,
		loader:'babel-loader?presets=[]=es2015&presets[]=react&plugins[]=transform-object-rest-spread&plugins[]=transform-es2015-modules-commonjs',
	  	},
	  	{ test: /\.json$/, 
	  	  exclude: /node_modules/,
	  	  loader: 'json-loader' 
	  	},
	  	{ test: /\.css$/, 
	  	  loader: 'style-loader!css-loader' }
	  ]
    }
};