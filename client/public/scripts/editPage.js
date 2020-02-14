"use strict";
const form = document.getElementById('form');
//form.onsubmit = submit;


document.getElementById("klikas").addEventListener('click', submitas)

function submitas(event) {
  var value = "bla"
  var url = "http://localhost:3000/update-post"+ window.location.search;
  var form =  generateForm()



  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  

  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  
  xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          // Request finished. Do processing here.
      }
  }
  xhr.send(JSON.stringify(form));
}

function generateForm() {
  let form = {}
  form.id = document.getElementById("id").value
  return form
}

(function () {
  let isEdit = window.location.search;

function loadId() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        fillForm(JSON.parse(this.response));
      }
    };
    xhttp.open("GET", "http://localhost:3000/get-post" + window.location.search);
    xhttp.send();
};



function fillForm(postValues) {
    for (let key in postValues) {
      if (document.getElementById(key)) {
        let element = document.getElementById(key);

        if (element.id === "content") {
          element.innerHTML = postValues[key];
        } else {
          element.setAttribute("value", postValues[key]);
        }
      }
    }
};

if (isEdit) {
  loadId();
}

if (!isEdit) {
  document.getElementById("delete").className = "hidden";
}

function save () {
  if (isEdit) {

  }
}
})();