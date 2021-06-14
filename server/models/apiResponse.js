const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const apiResponseSchema = new Schema({
  _id: Schema.Types.ObjectId,
  valid: Boolean,
  number: String,
  local_format: String,
  international_format: String,
  country_prefix: String,
  country_code: String,
  country_name: String,
  location: String,
  carrier: String,
  line_type: String,
  date_created: Date,
});

module.exports = mongoose.model("apiResponse", apiResponseSchema);
// {
//     valid:false,
//     number:35701121504179,
//     local_format:,
//     international_format:,
//     country_prefix:,
//     country_code:,
//     country_name:,
//     location:,
//     carrier:,
//     line_type:null
//   }
