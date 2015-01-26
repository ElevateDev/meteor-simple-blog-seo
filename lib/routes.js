var prevAfterAction = Blog.showRouteOptions.onAfterAction;
var tracker;

Router.onRun(function(){
  if( tracker ){
    tracker.stop();
    delete tracker;
  }
  this.next();
});

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
  if( prevAfterAction ){
    prevAfterAction();
  }
}
