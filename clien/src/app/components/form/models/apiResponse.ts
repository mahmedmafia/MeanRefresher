export interface apiResponse {
  _id: string,
  valid: Boolean,
  number: string,
  local_format: string,
  international_format: string,
  country_prefix: string,
  country_code: string,
  country_name: string,
  location: string,
  carrier: string,
  line_type: string,
  date_created: Date,
}
