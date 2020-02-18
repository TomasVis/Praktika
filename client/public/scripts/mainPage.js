"use strict";
function getTags(array) {
  let tagString = "";
  array.forEach(function(el) {
    return (tagString += '<div class="tag-label"><div class="inside-animation">'.concat(
      el,
      "</div></div>"
    ));
  });

  return '<div class="tag-container">'.concat(tagString, "</div>");
  
}

function getStatisticsBlock(array) {
  let tagString = "";
  array.forEach(function(el, index) {
    return (tagString =
      tagString +
      '<div><div class="info-label"><div class="inside-animation">'
        .concat(el.value, '</div></div><p class="regular-text">')
        .concat(el.name, "</p></div>"));
  });

  return '<div class="question-info-container">'.concat(tagString, "</div>");

}

function createArticle(articleInfo) {
  let postStatistics = [
    { name: "Views", value: articleInfo.views },
    { name: "Answers", value: articleInfo.answers },
    { name: "Votes", value: articleInfo.votes }
  ];

  let articleNode = '<div class="question-container"><a href="../views/edit-post.html?id='
    .concat(articleInfo.id, '" class="redirect-to-post" id=')
    .concat(articleInfo.id, '><h4 class="question-header">')
    .concat(articleInfo.title, '</h4><p class="regular-text">')
    .concat(articleInfo.content, "</p></a>")
    .concat(
      getTags(articleInfo.tags),
      '<div class="user-info-container"><figure><img src='
    )
    .concat(
      articleInfo.photo,
      ' alt="Lego User" class="user-image"/></figure><p class="regular-text user-name">'
    )
    .concat(articleInfo.author, '</p><div class="user-tag">')
    .concat(
      articleInfo.userTag,
      '</div><div class="question-details regular-text"><p>Asked on '
    )
    .concat(articleInfo.date, ' in</p><a class="link" href="#">')
    .concat(articleInfo.category, "</a></div></div></div>")
    .concat(getStatisticsBlock(postStatistics));

  return articleNode;

}

(function loadPosts() {
  let xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    if (this.status === 200) {
      let obj = JSON.parse(this.response);
      obj.forEach(function(element) {
        let newcontent = document.createElement("article");
        newcontent.className = "article-container";
        newcontent.innerHTML = createArticle(element);
        document.getElementById("articles").appendChild(newcontent);
      });
    }
  };

  xhttp.open("GET", "http://localhost:3000/posts", true);
  xhttp.send();
})();
