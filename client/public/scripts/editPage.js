"use strict";
const apiAdress = "http://localhost:3000";

const createXHR = function(method, url, callback, data) {
  let xhr = new XMLHttpRequest();
  xhr.onload = callback;
  xhr.open(method, url);
  if (method === "POST") {
    xhr.setRequestHeader("Content-type", "application/json");
  }
  xhr.send(data);
};

const sendUpdateRequest = function(event) {
  event.preventDefault();
  createXHR(
    "POST",
    apiAdress + "/update-post" + window.location.search,
    onSuccsessRedirect,
    JSON.stringify(createPostObject())
  );
};

const sendDeleteRequest = function(event) {
  event.preventDefault();
  createXHR(
    "GET",
    apiAdress + "/delete-post" + window.location.search,
    onSuccsessRedirect
  );
};

const sendPostDataRequest = function() {
  createXHR(
    "GET",
    apiAdress + "/get-post" + window.location.search,
    onSuccsessFillForm
  );
};

const onSuccsessRedirect = function() {
  if (this.status === 200) {
    window.location = "../index.html";
  }
};

const onSuccsessFillForm = function() {
  if (this.status === 200) {
    fillPostWithData(JSON.parse(this.response));
  }
};

const createPostObject = function() {
  let form = {
    id: document.getElementById("post-id").value,
    author: document.getElementById("author").value,
    date: document.getElementById("date").value,
    title: document.getElementById("title").value,
    content: document.getElementById("content").value
  };

  return form;
};

const fillPostWithData = function(post) {
   document.getElementById("post-id").value = post.id,
   document.getElementById("author").value = post.author
   document.getElementById("date").value = post.date
   document.getElementById("title").value = post.title
   document.getElementById("content").value = post.content
}

document.getElementById("save").addEventListener("click", sendUpdateRequest);
document.getElementById("delete").addEventListener("click", sendDeleteRequest);
let isEdit = window.location.search;
if (isEdit) {
  sendPostDataRequest();
}
if (!isEdit) {
  document.getElementById("delete").className = "hidden";
}
