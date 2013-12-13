App.ApplicationView = Em.View.extend({
  animations : {

        animateIn : {
          duration : 3500,
          easing : "cubic-bezier(0.525, 0.085, 0.255, 1.030)",
          delay : 100,
          properties : {
              height : 100
          }
        },
        animateOut : {
            duration : 3500,
            easing : "cubic-bezier(0.525, 0.085, 0.255, 1.030)",
            delay : 0,
            properties : {
                opacity : 1
            }
        },
    },

    prep : function (done) {
        done();
    }
});
