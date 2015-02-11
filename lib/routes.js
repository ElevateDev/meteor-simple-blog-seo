
var tracker;

Router.onRun(function(){
  if( tracker ){
    tracker.stop();
    tracker = undefined;
  }
  this.next();
});

var prevAfterShowAction = Blog.showRouteOptions.onAfterAction;
Blog.showRouteOptions.onAfterAction = function(){
  tracker = Tracker.autorun(function(){
    var post = Posts.findOne( Blog._showing.get() );
    if( post ){
      SEO.set({
        title: "Blog - " + post.title,
        meta: {
          'description': post.description
        }
      });
    }
  });
  if( prevAfterShowAction ){
    prevAfterShowAction();
  }
};
Blog.showRouteOptions.fastRender = true;

var prevAfterIndexAction = Blog.indexRouteOptions.onAfterAction;
Blog.indexRouteOptions.onAfterAction = function(){
  SEO.set({
    title: "Blog"
  });
  if( prevAfterIndexAction ){
    prevAfterIndexAction();
  }
};
Blog.indexRouteOptions.fastRender = true;
