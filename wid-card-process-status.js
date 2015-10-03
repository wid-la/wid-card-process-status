'use strict';

(function () {
  Polymer({

    is: 'wid-card-process-status',

    behaviors: [Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior],

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
    }

  });
})();