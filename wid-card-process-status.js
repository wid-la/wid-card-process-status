'use strict';

(function () {
  Polymer({

    is: 'wid-card-process-status',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior, Polymer.WidCardThemeBehavior],

    properties: {
      /**
       * Active
       * @type {Boolean}
       */
      active: {
        type: Boolean,
        value: false
      },

      /**
       * name
       * @type {String}
       */
      name: {
        type: String,
        value: 'Process'
      },

      /**
       * Status
       * @type {Number}
       */
      status: {
        type: Number,
        value: '~'
      },

      /**
       * User
       * @type {String}
       */
      user: {
        type: String,
        value: ''
      },

      /**
       * Datetime
       * @type {String}
       */
      datetime: {
        type: String,
        value: '10/21/85 04:29'
      }
    },

    _localDateTime: function _localDateTime(serverdate) {
      var date = new Date(serverdate + ' UTC');
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var year = String(date.getFullYear()).substring(2, 4);
      var hours = date.getHours();
      var minutes = date.getMinutes();

      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;

      return month + '/' + day + '/' + year + ' ' + hours + ':' + minutes;
    }

  });
})();