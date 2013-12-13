App.AnimatedViewOne = Ember.View.extend({
  animations: {
      animateIn : [
      {
          duration : 3500,
          easing : "cubic-bezier(0.525, 0.085, 0.255, 1.030)",
          delay : 0,
          properties : {
              opacity : 1
          }
      },
      {
          duration : 3500,
          easing : "cubic-bezier(0.525, 0.085, 0.255, 1.030)",
          delay : 0,
          properties : {
              height : 500
          }
      }
    ]
  },
    prep : function (done) {
        this.$().css("opacity", 0);
        done();
    }
});
