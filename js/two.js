Vue.filter('currency', function (value) {
      return '$' + parseFloat(value).toFixed(2);
    });

    Vue.component('modal', {
      template: '#modal-template'
    }
)

var app = new Vue({
      el: '#app2',
      data: {
        money: 0,
        goal: "0.90", correct: true,
        count: 5,
        winnerModal: false,
        loserModal: false,
        overModal: false,
        over: 0.91,
      },
      methods: {
        penny: function() {
          return this.money += .01
        },
        nickel: function() {
          return this.money += .05
        },
        dime: function() {
          return this.money += .1
        },
        quarter: function() {
          return this.money += .25
        },
        dollar: function() {
          return this.money += 1
        },
        fiveDollar: function() {
          return this.money += 5
        },
        countUp: function() {
          this.count -= 1
            if (this.count == -1) {
          }
        }
      },
      computed: {
        over: function() {
          if (this.money > this.goal) {
            app.overModal = true
          }
        },
        winner: function() {
          if (this.money == this.goal) {
            app.winnerModal = true
          }
        },
        loser: function() {
          if (this.count < 0) {
            app.loserModal = true
          }
        }
      }

    });

