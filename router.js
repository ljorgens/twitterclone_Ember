twitterClone.Router.map(function(){
  this.resource('posts', {path: '/'}, function(){
    this.resource('newTweet');
    this.resource('timestamp', {path: 'timestamp/:timestamp_id'});
  });
});
