const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

var axios = require("axios");
const apiResponse = require("../models/apiResponse");
router.post("/", (req, res,next) => {
  console.log(req.body.phoneNumber);
  console.log("hi");
  const param = {
    access_key: "9cbf7fc36b4131a72fc2674883bb1773",
    number: req.body.phoneNumber,
    country_code: "EG",
    format: 1,
  };
  axios
    .post("http://apilayer.net/api/validate", {}, { params: param })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      const apiResp = new apiResponse({
        _id: mongoose.Types.ObjectId(),
        valid: data.valid,
        number: data.number,
        local_format: data.local_format,
        international_format: data.international_format,
        country_prefix: data.country_prefix,
        country_code: data.country_code,
        country_name: data.country_name,
        location: data.location,
        carrier: data.carrier,
        line_type: data.line_type,
        date_created: new Date(Date.now()).toISOString(),
      });
      return apiResp.save();
    })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/", (req, res,next) => {
  apiResponse
    .find().exec()
    .then((respone) => {
      // if(res==null){
      // throw Error('no logs found')
      // }
      res.status(200).json(respone);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
module.exports = router;
