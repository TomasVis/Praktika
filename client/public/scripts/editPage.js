"use strict";
const submit = function (event) {
  event.preventDefault();
  let url = "http://localhost:3000/update-post" + window.location.search;
  let form = generateForm();
  if (event.target.id === "delete") {
    form.delete = "delete";
  }
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onload = function() {
    if (xhr.status === 200) {
      window.location = "../index.html";
    }
  };
  xhr.send(JSON.stringify(form));
}

const generateForm = function () {
  let form = {
    id: document.getElementById("post-id").value,
    author: document.getElementById("author").value,
    date: document.getElementById("date").value,
    title: document.getElementById("title").value,
    content: document.getElementById("content").value
  };

  return form;

}
const createXHR = function (method, url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = callback;
  xhr.open(method, url);
  xhr.send();
}

const getPostById = function () {
  createXHR("GET","http://localhost:3000/get-post" + window.location.search, function() {
    if (this.status === 200) {
      fillForm(JSON.parse(this.response));
    }
  })
}

const fillForm = function (post) {
  for (let key in post) {
    if (document.getElementById(key)) {
      let element = document.getElementById(key);
      if (element.id === "content") {
        element.innerHTML = post[key];
      } else {
        element.setAttribute("value", post[key]);
      }
    }
  }
}


  document.getElementById("save").addEventListener("click", submit);
  document.getElementById("delete").addEventListener("click", submit);
  let isEdit = window.location.search;
  if (isEdit) {
    getPostById();
  }
  if (!isEdit) {
    document.getElementById("delete").className = "hidden";
  }

