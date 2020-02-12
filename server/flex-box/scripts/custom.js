"use strict";

let createTags = array => {
  let tagString = "";
  array.forEach(
    el =>
      (tagString =
        tagString +
        `<div class="tag-label"><div class="inside-animation">${el}</div></div>`)
  );

  return `<div class="tag-container">${tagString}</div>`;
};

let createArticle = articleInfo => {
  console.log(articleInfo);
  let articleNode = `<div class="question-container">
  <div class="redirect-to-post" id=${articleInfo.id}>
  <h4 class="question-header">${articleInfo.title}</h4>
  <p class="regular-text">${articleInfo.content}</p>
  </div>
 ${createTags(articleInfo.tags)}
  <div class="user-info-container">
    <figure>
      <img
        src=${articleInfo.photo}
        alt="Lego User"
        class="user-image"
      />
    </figure>
    <p class="regular-text user-name">${articleInfo.author}</p>
    <div class="user-tag">${articleInfo.userTag}</div>
    <div class="question-details regular-text">
      <p>Asked on ${articleInfo.date} in</p>
      <a class="link" href="#">${articleInfo.category}</a>
    </div>
  </div>
</div>
<div class="question-info-container">
  <div >
    <div class="info-label"><div class="inside-animation">${
      articleInfo.views
    }</div></div>
    <p class="regular-text">Views</p>
  </div>
  <div >
    <div class="info-label"><div class="inside-animation">${
      articleInfo.answers
    }</div></div>
    <p class="regular-text">Answers</p>
  </div>
  <div >
    <div class="info-label"><div class="inside-animation">${
      articleInfo.votes
    }</div></div>
    <p class="regular-text">Votes</p>
  </div>
</div>`;

  return articleNode;
};

function loadPosts() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const myJson = JSON.parse(this.response);
      const obj = JSON.parse(myJson);
      obj.forEach(element => {
        let newcontent = document.createElement("article");
        newcontent.className = "article-container";
        newcontent.innerHTML = createArticle(element);
        document.getElementById("articles").appendChild(newcontent);
      });
    }
  };
  xhttp.open("GET", "http://localhost:3000/posts", true);
  xhttp.send();
}

function editPost() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.response)
    }
  };
  xhttp.open("POST", "http://localhost:3000/edit-post", true);
  xhttp.send();
}

if (document.getElementById("articles")) {
  loadPosts()
  let theParent = document.querySelector("#articles");
  theParent.addEventListener("click", onClick, false);
}


function onClick(e) {
  //if (e.target !== e.currentTarget) {
    if (e.target.parentElement.className == "redirect-to-post") {
      editPost()
      //location.href = "http://localhost:3000/edit-page.html";
        let clickedItem = e.target.id;
        console.log(e.target.parentElement.id)
        console.log(e.target.parentElement.className)
    }
    e.stopPropagation();
}