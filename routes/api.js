const express = require("express");
const router = express.Router();
const axios = require("axios");

let url1 = "https://accounts.spotify.com/api/token";
let url2 = "https://api.spotify.com/v1/recommendations";

router.post("/query", async (req, res, next) => {
  let data = req.body;
  let recommendations = [];

  let response1 = await axios({
    url: url1,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          "0d00f0f666cc4294a119196d3ab45c11" + ":" + "d2abc01c7f6d40e39f963593727d0d96"
        ).toString("base64"),
    },
    data: "grant_type=client_credentials",
  });
  let token = response1.data.access_token;

  axios({
    url: `${url2}?limit=12&market=DE&seed_genres=${data.personality}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => {
      recommendations = response.data.tracks;
      console.log(recommendations);
      res.send(recommendations);
    })
    .catch((err) => console.log(err));
});
module.exports = router;
