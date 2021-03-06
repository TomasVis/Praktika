const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');


let posts = JSON.parse(fs.readFileSync('./data.json'));

const app = express();

var jsonParser = bodyParser.json()


var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors());
app.use(express.static('public'))



app.get('/posts',urlencodedParser, function(req, res) {
  res.json(posts);
});

app.get('/get-post',urlencodedParser, function(req, res) {
  if(req.query.id) {
    let post = posts.find(x => x.id === Number(req.query.id))

    res.json(post);
  }
  else res.json("no-data")

});

app.post('/update-post',jsonParser, function(req, res) {
  if(req.body.hasOwnProperty('delete')) {

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
  res.json('complete')
});



app.listen(3000, function() {
  console.log('CORS-enabled web server listening on port 3000');
});

let createNewPost = (body) => {
  let newPost = {
    id: nextId,
    date: body.date,
    author: body.author,
    photo:'https://randomuser.me/api/portraits/lego/1.jpg',
    userTag: 'Reviewer',
    views:0,
    answers:0,
    votes:0,
    tags:['android', 'apple', 'apps', 'google', 'technology'],
    category: 'Mobile',
    title: body.title,
    content: body.content
  }
  nextId++
return newPost
}

let nextId = posts.length