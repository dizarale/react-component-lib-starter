var path = require('path');

module.exports = {
 title: 'Ticketmelon UI', //components: './lib/components/**/*.js'
 components: './src/components/**/[A-Z]*.js',
 // sections: [
 //   { name: 'Button', components: 'src/components/Button/*.js' },
 //   { name: 'Line', components: 'src/components/Line/*.js'},
 //   { name: 'Area', components: 'src/components/Area/*.js'},
 //   { name: 'Combo', components: 'src/components/Combo/*.js'},
 //  //  { name: 'BarChart', components: 'src/components/Bar/*.js'}
 // ],
 updateWebpackConfig(webpackConfig) {
   // Your source files folder or array of folders, should not include node_modules
   const dir = path.join(__dirname, 'src');
   webpackConfig.module.loaders.push(
     // Babel loader will use your project’s .babelrc
     {
       test: /\.jsx?$/,
       include: dir,
       loader: 'babel'
     },
     // Other loaders that is needed for your components
     {
       test: /\.css$/,
       include: dir,
       loader: 'style!css?modules&importLoaders=1'
     }
   );
   return webpackConfig;
 },
};
