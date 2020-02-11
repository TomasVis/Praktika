var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

let posts = [
  {
    id: 0,
    date: "June 5, 2015",
    author: "Marry",
    userTag: "Proffesor",
    views:70,
    answers:3,
    votes:0,
    tags:["apps", "business", "glass", "google", "technology"],
    category: "Technology",
    title: "Select coordinates which fall within central",
    content:
      "I have a database of coordinates adipiscing elit. Proin facilisis est ut ultricies mattis. In vitae velit nec ante viverra convallis. Donec vehicula luctus euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus."
  },
  {
    id: 1,
    date: "June 5, 2015",
    author: "adnim",
    userTag: "Reviewer",
    views:52,
    answers:10,
    votes:2,
    tags:["android", "apple", "apps", "google", "technology"],
    category: "Mobile",
    title: "Select coordinates which fall within central",
    content:
      "I have a database of coordinates adipiscing elit. Proin facilisis est ut ultricies mattis. In vitae velit nec ante viverra convallis. Donec vehicula luctus euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus."
  },
  {
    id: 2,
    date: "March 5, 2015",
    author: "Smith",
    userTag: "Train",
    views:70,
    answers:3,
    votes:0,
    tags:["apps", "facebook", "marketing", "google", "social"],
    category: "Music",
    title: "Why isn't music free",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis est ut ultricies mattis. In vitae velit nec ante viverra convallis. Donec vehicula luctus euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus."
  },
  {
    id: 3,
    date: "June 5, 2015",
    author: "Marry",
    userTag: "Train",
    views:70,
    answers:3,
    votes:0,
    tags:["apps", "facebook", "marketing", "google", "social"],
    category: "Music",
    title: "How to become milionaire in the next 5 years",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis est ut ultricies mattis. In vitae velit nec ante viverra convallis. Donec vehicula luctus euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus."
  }
];

app.get("/posts", function(req, res, next) {
  res.json(JSON.stringify(posts));
});

app.listen(3000, function() {
  console.log("CORS-enabled web server listening on port 3000");
});
