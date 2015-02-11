Package.describe({
  name: 'elevatedevdesign:simple-blog-seo',
  summary: 'Package to add default SEO to Simple-Blog',
  version: '0.0.4',
  git: 'https://github.com/ElevateDevelopmentAndDesign/meteor-simple-blog-seo'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  
  api.use([
    'elevatedevdesign:simple-blog@0.0.5',
    "manuelschoebel:ms-seo@0.4.1",
    "iron:router@1.0.0",
    "meteorhacks:fast-render@2.3.1",
    "spiderable@1.0.6"
  ]);
 
  api.addFiles([
    'lib/routes.js'
  ]);
});
