twitterClone.TimestampRoute = Ember.Route.extend({
  model: function(params) {
    return stockTweets.findBy('id', params.timestamp_id);
  }
});
