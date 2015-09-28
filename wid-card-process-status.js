'use strict';

(function () {
  Polymer({

    is: 'wid-card-process-status',

    behaviors: [Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior],

    properties: {
      /**
       * Backup Status Code
       * @type {Number}
       */
      backup: {
        type: Number
      },

      /**
       * Deploy Status Code
       * @type {String}
       */
      deploy: {
        type: String
      },

      /**
       * Status
       * @type {Number}
       */
      status: {
        type: Number
      },

      /**
       * User
       * @type {String}
       */
      user: {
        type: String
      },

      /**
       * Datetime
       * @type {String}
       */
      datetime: {
        type: String
      }
    }

  });
})();