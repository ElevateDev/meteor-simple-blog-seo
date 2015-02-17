var prevAfterShowAction = Blog.showRouteOptions.onAfterAction;
Blog.showRouteOptions.onAfterAction = function(){
  var post = Posts.findOne( Blog._showing.get() );
  if( post ){
    SEO.set({
      title: post.title + " | Blog",
      meta: {
        'description': post.description
      },
      og: {
        'title': post.title + ' | Blog',
        'description': post.description
      }
    });
  }
  if( prevAfterShowAction ){
    prevAfterShowAction();
  }
};
Blog.showRouteOptions.fastRender = true;


SeoCollection.update(
    {
        route_name: 'blog'
    },
    {
        $set: {
            route_name: 'blog',
            title: 'Blog',
            og: {
                'title': 'Blog'
            }
        }
    },
    {
        upsert: true
    }
);

Blog.indexRouteOptions.fastRender = true;
