"use strict";

var createTags = array => {
  var tagString = "";
  array.forEach(
    el =>
      (tagString =
        tagString +
        `<div class="tag-label"><div class="inside-animation">${el}</div></div>`)
  );

  return `<div class="tag-container">${tagString}</div>`;
};

var createArticle = articleInfo => {
  var articleNode = `<div class="question-container">
  <a href="../views/edit-page.html?id=${
    articleInfo.id
  }" class="redirect-to-post" id=${articleInfo.id}>
  <h4 class="question-header">${articleInfo.title}</h4>
  <p class="regular-text">${articleInfo.content}</p>
  </a>
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
      var obj = JSON.parse(this.response);
      obj.forEach(element => {
        var newcontent = document.createElement("article");
        newcontent.className = "article-container";
        newcontent.innerHTML = createArticle(element);
        document.getElementById("articles").appendChild(newcontent);
      });
    }
  };
  xhttp.open("GET", "./posts", true);
  xhttp.send();
}

function editPost() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var newcontent = document.createElement("div");
      newcontent.className = "form-container";
      newcontent.innerHTML = generateUpdateForm(JSON.parse(this.response));
      document.getElementById("update").appendChild(newcontent);
    }
  };
  xhttp.open("GET", "../get-post" + window.location.search);
  xhttp.send();
}

if (document.getElementById("articles")) {
  loadPosts();

}
if (document.getElementById("update")) {
  editPost();
}

function generateUpdateForm(parameters) {
  var formString = `<div class="form-container">
<h1>Edit Page</h1>
    <form action="/update-post" method="POST">
    <input type="hidden" name="id" value=${parameters.id}>
      Name:<br>
      <input type="text" name="author" value=${parameters.author}>
      <br>
      Date:<br>
      <input type="date" name="date" value="${parameters.date}" >
      <br><br>
      Title:<br>
      <input type="text" name="title" value="${parameters.title}">
      <br><br>
      Explanation:<br>
      <input type="text" name="content" value="${parameters.content}">
      <br><br>
      <input type="submit" value="Save">

    </form> 
    <form action="/delete-post" method="POST">
    <input type="hidden" name="id" value=${parameters.id}>
    <input type="submit" value="Delete">
    </form>
  </div>`;
  return formString;
}
