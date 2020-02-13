(function() {
  let generateTags = array => {
    let tagString = "";
    array.forEach(
      el =>
        (tagString += `<div class="tag-label"><div class="inside-animation">${el}</div></div>`)
    );
    return `<div class="tag-container">${tagString}</div>`;
  };
  let generateStatisticsBlock = array => {
    let tagString = "";
    let text = ["Views", "Answers", "Votes"];
    array.forEach(
      (el, index) =>
        (tagString =
          tagString +
          `<div >
            <div class="info-label">
              <div class="inside-animation">${el}</div>
            </div>
            <p class="regular-text">${text[index]}</p>
          </div>`)
    );
    return `<div class="question-info-container">${tagString}</div>`;
  };

  let generateArticle = articleInfo => {
    let stats = [articleInfo.views, articleInfo.answers, articleInfo.votes];
    let articleNode = `<div class="question-container">
  <a href="../views/edit-post.html?id=${
    articleInfo.id
  }" class="redirect-to-post" id=${articleInfo.id}>
  <h4 class="question-header">${articleInfo.title}</h4>
  <p class="regular-text">${articleInfo.content}</p>
  </a>
 ${generateTags(articleInfo.tags)}
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
</div>${generateStatisticsBlock(stats)}
`;

    return articleNode;
  };

  (function loadPosts() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let obj = JSON.parse(this.response);
        obj.forEach(element => {
          let newcontent = document.createElement("article");
          newcontent.className = "article-container";
          newcontent.innerHTML = generateArticle(element);
          document.getElementById("articles").appendChild(newcontent);
        });
      }
    };
    xhttp.open("GET", "./posts", true);
    xhttp.send();
  })();
})();
