twitterClone.PostsController = Ember.ArrayController.extend({
  itemController: 'tweet',

  actions: {
    addTweet: function() {
      stockTweets.addObject({ profile:this.newTweetProfile, tweet:this.newTweetTweet, timestamp:this.newTweetTimestamp, id:stockTweets.length + 1})
    },

  }
});

// twitterClone.ClickableView = Ember.View.extend){
//   click: function(evt) {
//     alret("ClickableView was clicked!");
//   }
// }
