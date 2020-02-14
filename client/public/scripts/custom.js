"use strict";


 function generateTags(array) {
    let tagString = "";
    array.forEach(function (el) {
      return tagString += "<div class=\"tag-label\"><div class=\"inside-animation\">".concat(el, "</div></div>");
    });
    return "<div class=\"tag-container\">".concat(tagString, "</div>");
  };

function generateStatisticsBlock(array) {
    let tagString = "";
    let text = ["Views", "Answers", "Votes"];
    array.forEach(function (el, index) {
      return tagString = tagString + "<div><div class=\"info-label\"><div class=\"inside-animation\">".concat(el, "</div></div><p class=\"regular-text\">").concat(text[index], "</p></div>");
    });
    return "<div class=\"question-info-container\">".concat(tagString, "</div>");
  };

function generateArticle(articleInfo) {
    let stats = [articleInfo.views, articleInfo.answers, articleInfo.votes];
    let articleNode = "<div class=\"question-container\"><a href=\"../views/edit-post.html?id=".concat(articleInfo.id, "\" class=\"redirect-to-post\" id=").concat(articleInfo.id, "><h4 class=\"question-header\">").concat(articleInfo.title, "</h4><p class=\"regular-text\">").concat(articleInfo.content, "</p></a> ").concat(generateTags(articleInfo.tags), "<div class=\"user-info-container\"><figure><img src=").concat(articleInfo.photo, " alt=\"Lego User\" class=\"user-image\"/></figure><p class=\"regular-text user-name\">").concat(articleInfo.author, "</p><div class=\"user-tag\">").concat(articleInfo.userTag, "</div><div class=\"question-details regular-text\"><p>Asked on ").concat(articleInfo.date, " in</p><a class=\"link\" href=\"#\">").concat(articleInfo.category, "</a></div></div></div>").concat(generateStatisticsBlock(stats));
    return articleNode;
  };

(function loadPosts() {
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    // know what does ready state mean
    if (this.readyState === 4 && this.status === 200) {
      let obj = JSON.parse(this.response);
      obj.forEach(function (element) {
        let newcontent = document.createElement("article");
        newcontent.className = "article-container";
        newcontent.innerHTML = generateArticle(element);
        document.getElementById("articles").appendChild(newcontent);
      });
    }
  };

  xhttp.open("GET", "http://localhost:3000/posts", true);
  xhttp.send();
})();
