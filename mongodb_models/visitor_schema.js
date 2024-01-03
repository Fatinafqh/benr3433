const mongoose = require('mongoose');

const visitorSchema = mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    license_number: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    visitor_pass_id: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Visitor_Pass', // Corrected reference name
      },
    ],
  },
  { versionKey: false }
);

const Visitor = mongoose.model('Visitor', visitorSchema); // Corrected variable name
module.exports = Visitor;
