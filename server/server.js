const express = require("express");
const cors = require("cors");
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//app.use(express.static('flex-box'))
app.use('/', express.static(path.join(__dirname, 'flex-box')))

let posts = [
  {
    id: 0,
    date: "June 5, 2015",
    author: "Marry",
    photo:"https://randomuser.me/api/portraits/lego/0.jpg",
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
    author: "admin",
    photo:"https://randomuser.me/api/portraits/lego/1.jpg",
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
    photo:"https://randomuser.me/api/portraits/lego/2.jpg",
    userTag: "Train",
    views:70,
    answers:3,
    votes:0,
    tags:["billionaire", "business"],
    category: "Music",
    title: "Why isn't music free",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis est ut ultricies mattis. In vitae velit nec ante viverra convallis. Donec vehicula luctus euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus."
  },
  {
    id: 3,
    date: "June 5, 2015",
    author: "Marry",
    photo:"https://randomuser.me/api/portraits/lego/0.jpg",
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
// app.get('/', function(req, res){
//   res.sendFile('index.html');
// }); 

app.get("/posts", function(req, res, next) {
  res.json(JSON.stringify(posts));
});

app.post("/edit-post", function(req, res, next) {
  //res.sendFile('edit-page.html');
  res.sendFile('edit-page.html', { root: path.join(__dirname, './flex-box/views') });
});

app.post("/new-post", function(req, res, next) {
  console.log(req.body)
  posts.push(createNewPost(req.body))
  res.sendFile('index.html', { root: path.join(__dirname, './flex-box/views') });

});

app.listen(3000, function() {
  console.log("CORS-enabled web server listening on port 3000");
});


let createNewPost = (body) => {
  let newPost = {
    id: posts.length,
    date: body.date,
    author: body.author,
    photo:"https://randomuser.me/api/portraits/lego/1.jpg",
    userTag: "Reviewer",
    views:0,
    answers:0,
    votes:0,
    tags:["android", "apple", "apps", "google", "technology"],
    category: "Mobile",
    title: body.title,
    content: body.content
  }

return newPost
}