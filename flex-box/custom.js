"use strict";

var el = document.createElement("div");
el.innerHTML =`        <article class=" article-container ">
<div class="question-container">
  <h4 class="question-header">
    Select coordinates which fall within central
  </h4>
  <p class="regular-text">
    I have a database of coordinates adipiscing elit. Proin facilisis
    est ut ultricies mattis. In vitae velit nec ante viverra
    convallis. Donec vehicula luctus euismod. Interdum et malesuada
    fames ac ante ipsum primis in faucibus.
  </p>
  <div class="tag-container">
    <div class="tag-label"><div class="inside-animation">apps</div></div>
    <div class="tag-label"><div class="inside-animation">business</div></div>
    <div class="tag-label"><div class="inside-animation">glass</div></div>
    <div class="tag-label"><div class="inside-animation">google</div></div>
    <div class="tag-label"><div class="inside-animation">technology</div></div>
  </div>
  <div class="user-info-container">
    <figure>
      <img
        src="https://randomuser.me/api/portraits/lego/6.jpg "
        alt="Lego User"
        class="user-image"
      />
    </figure>
    <p class="regular-text user-name">Marry</p>
    <div class="user-tag">Proffesor</div>
    <div class="question-details regular-text">
      <p>Asked on June 5, 2015 in</p>
      <a class="link" href="#">Technology</a>
    </div>
  </div>
</div>
<div class="question-info-container">
  <div >
    <div class="info-label"><div class="inside-animation">70</div></div>
    <h5>Views</h5>
  </div>
  <div >
    <div class="info-label"><div class="inside-animation">3</div></div>
    <h5>Answers</h5>
  </div>
  <div >
    <div class="info-label"><div class="inside-animation">0</div></div>
    <h5>Votes</h5>
  </div>
</div>
</article>`
  //"<html><head><title>titleTest</title></head><body><a href='test0'>test01</a><a href='test1'>test02</a><a href='test2'>test03</a></body></html>";

el.getElementsByTagName("a");

const userAction = async () => {
  const res = await fetch("http://localhost:3000/posts");
  const myJson = await res.json();
  const obj = await JSON.parse(myJson);
  console.log(obj);
  obj.forEach(element => {
    let newcontent = document.createElement("div");
    newcontent.innerHTML = "bar";
    document.getElementById("articles").appendChild(el);
    console.log(element);
  });
};

userAction();
