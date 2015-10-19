'use strict';

(function () {
  Polymer({

    is: 'wid-card-process-status',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior],

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
        value: 'Process Name'
      },

      /**
       * Status
       * @type {Number}
       */
      status: {
        type: Number,
        value: 'Status'
      },

      /**
       * User
       * @type {String}
       */
      user: {
        type: String,
        value: 'Nick Chad'
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

      return month + '/' + day + '/' + year + ' ' + hours + ':' + minutes;
    }

  });
})();