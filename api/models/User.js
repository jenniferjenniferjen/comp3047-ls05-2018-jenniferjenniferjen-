/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    username: {
      type: "string"
    },

    password: {
      type: "string"
    },

    supervises: {
      collection: 'Person',
      via: 'worksFor'
    },

    username: {
      type: 'string',
      unique: true,
      required: true
    },

    role: {
      type: 'string',
      enum: ['admin', 'tester', 'visitor'],
      defaultsTo: 'visitor'
  },

  },

  customToJSON: function () {
    // Return a shallow copy of this record with the password removed.
    return _.omit(this, ['password'])//for IMPORTANT infomation
  },
};

