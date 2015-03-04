twitterClone.PostsRoute = Ember.Route.extend({
  model: function() {
    return stockTweets;
  }
});
