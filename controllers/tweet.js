twitterClone.TweetController = Ember.ObjectController.extend({
  sortProperties: ['timestamp'],
  showTimeStamp: false,
  actions: {
    toggleTimeStamp: function(){
      if (this.showTimeStamp === false){
        this.set('showTimeStamp', true);
      } else {
        this.set('showTimeStamp', false);
      }
    }
  }

});
