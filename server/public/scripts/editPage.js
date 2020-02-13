(function() {
  let isEdit = window.location.search;

  const loadId = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {

        fillForm(JSON.parse(this.response));
      }
    };
    xhttp.open("GET", "../get-post" + window.location.search);
    xhttp.send();
  };

  const fillForm = postValues => {
    for (const key in postValues) {
      if (document.getElementById(key)) {
        let element = document.getElementById(key);
        element.setAttribute("value", postValues[key]);
      }
    }
  };

  if (isEdit) {

    loadId();
  }
  if(!isEdit) {
    document.getElementById("delete").className = "hidden"
  }

})();
