const express = require("express");
const cors = require("cors");
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'))



app.get("/posts", function(req, res) {
  res.json(posts);
});

app.get("/get-post", function(req, res) {
  let post = posts.find(x => x.id === Number(req.query.id))
  res.json(post);
});

app.post("/update-post", function(req, res) {
  console.log(req.body)
  if(req.body.hasOwnProperty("delete")) {

    let index = posts.findIndex(obj => Number(obj.id) === Number(req.body.id))
    posts.splice(index,1)
  }
  else if(req.body.id){
    req.body.id = Number(req.body.id)
    let index = posts.findIndex(obj => Number(obj.id) === Number(req.body.id))
    let newObject = {...posts[index], ...req.body};
    posts[index] = newObject;
  }
  else {
    posts.push(createNewPost(req.body))
  }
  res.sendFile('index.html', { root: path.join(__dirname, './public') });
});

// app.post("/", function(req, res) {
//   posts.push(createNewPost(req.body))
//   res.sendFile('index.html', { root: path.join(__dirname, './public') });

// });

app.listen(3000, function() {
  console.log("CORS-enabled web server listening on port 3000");
});

let createNewPost = (body) => {
  let newPost = {
    id: nextId,
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
  nextId++
return newPost
}

let posts = [
  {
    id: 0,
    date: "2014-06-09",
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
    date: "2015-01-01",
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
    date: "2015-02-20",
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
    date: "2015-10-15",
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

let nextId = posts.length