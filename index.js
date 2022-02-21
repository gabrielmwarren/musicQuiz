const express = require("express");
const path = require("path");
var url = require("url");
const fs = require("fs");
const SpotifyWebApi = require("spotify-web-api-node");

require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let token = "";
let trackName = "";
let playlist = "";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: "http://localhost:8080/callback",
});

spotifyApi.setAccessToken(token);

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

app.get("/next", (req, res) => {
  spotifyApi
    .getPlaylistTracks(playlist, {
      offset: 1,
      limit: 100,
      fields: "items",
    })
    .then(
      function (data) {
        let playlistIndex = getRandomNum(0, data.body.items.length);
        trackName = data.body.items[playlistIndex].track.name;
        res.redirect(
          `http://localhost:8080/quiz/?uri=${data.body.items[playlistIndex].track.uri}`
        );
      },
      function (err) {
        console.log(err);
        spotifyApi.clientCredentialsGrant().then(
          function (data) {
            console.log(data.body["access_token"]);
            spotifyApi.setAccessToken(data.body["access_token"]);
            res.redirect(`http://localhost:8080/next`);
          },
          function (err) {
            console.log("Could not refresh access token", err);
          }
        );
      }
    );
});

app.get("/start", (req, res) => {
  var q = url.parse(
    req.protocol + "://" + req.get("host") + req.originalUrl,
    true
  );
  playlist = q.query.playlist;
  res.redirect(`http://localhost:8080/next`);
});

app.get("/quiz", (req, res) => {
  let using100 = false;
  if (playlist === "3w8uoe0f8xPPw7p774kQtX") {
    var rawdata = fs.readFileSync("hip-hop-100.json");
  } else if (playlist === "7nKdJLVjj5fzWw2u3xlbVm") {
    var rawdata = fs.readFileSync("rock-100.json");
  } else {
    var rawdata = fs.readFileSync("billboard-100.json");
    using100 = true;
  }
  const list = JSON.parse(rawdata);
  const ansrLocation = getRandomNum(0, 4);
  let trackList = [];
  for (let index = 0; index < 4; index++) {
    if (index === ansrLocation) {
      trackList.push(trackName);
    } else {
      if (using100) {
        trackList.push(list.songs[getRandomNum(0, 100)].title);
      } else {
        trackList.push(list.songs[getRandomNum(0, 50)].title);
      }
    }
  }
  res.render("index", { songName: trackName, choices: trackList });
});

app.use(express.static(__dirname + "/public")); //__dir and not _dir

app.listen(8080, () => {
  console.log("Server Works !!! At port 8080");
});
