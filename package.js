Package.describe({
  name: 'elevatedevdesign:simple-blog-seo',
  summary: 'Package to add default SEO to Simple-Blog',
  version: '0.0.1',
  git: 'https://github.com/ElevateDevelopmentAndDesign/meteor-simple-blog-seo'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  
  api.use([
    'elevatedevdesign:simple-blog',
    "manuelschoebel:ms-seo",
    "iron:router"
  ]);
 
  api.addFiles([
    'lib/routes.js'
  ]);
});
