'use strict';
(function(){
document.getElementById('save').addEventListener('click', submit);
document.getElementById('delete').addEventListener('click', submit);
let isEdit = window.location.search;
if (isEdit) {
  loadId();
}

if (!isEdit) {
  document.getElementById('delete').className = 'hidden';
}
})()
function submit(event) {
  event.preventDefault()
  let url = 'http://localhost:3000/update-post' + window.location.search;
  let form = generateForm();
  if (event.target.id === 'delete') {
    form.delete = 'delete';
  }
  let xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);

  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.status === 200) {

      window.location = 'http://localhost:80/index.html';
    }
  };

  xhr.send(JSON.stringify(form));
}

function generateForm() {
  let form = {};
  form.id = document.getElementById('post-id').value;
  form.author = document.getElementById('author').value;
  form.date = document.getElementById('date').value;
  form.title = document.getElementById('title').value;
  form.content = document.getElementById('content').value;
  return form;
}

function loadId() {

  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.status === 200) {
        fillForm(JSON.parse(xhr.response)); 
    }
  };
  xhr.open('GET', 'http://localhost:3000/get-post' + window.location.search);
  xhr.send();
}

function fillForm(postValues) {
  for (let key in postValues) {
    if (document.getElementById(key)) {
      let element = document.getElementById(key);

      if (element.id === 'content') {
        element.innerHTML = postValues[key];
      } else {
        element.setAttribute('value', postValues[key]);
      }
    }
  }
}

