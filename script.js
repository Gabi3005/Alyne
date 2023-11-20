function randomIndex() {
    return Math.floor(Math.random() * 4);
  }
  
  function showRandomRecipe() {
    var recipes = document.getElementsByTagName("li");
    var index = randomIndex();
    var link = recipes[index].firstChild;
    window.open(link.href, "_blank");
  }
  
  function addRandomButton() {
    var header = document.getElementsByTagName("h1")[0];
    var button = document.createElement("button");
    button.innerHTML = "Receita Aleatória";
    button.style.fontFamily = "Arial, sans-serif";
    button.style.fontSize = "24px";
    button.style.color = "white";
    button.style.backgroundColor = "#00b300";
    button.style.border = "none";
    button.style.padding = "10px";
    button.style.marginLeft = "20px";
    button.style.cursor = "pointer";
    button.addEventListener("click", showRandomRecipe);
    header.appendChild(button);
  }
  
  document.addEventListener("DOMContentLoaded", addRandomButton);
  
  function loadRecipe() {
    var link = event.target;
    var name = link.innerHTML;
    var file = link.href;
    var item = link.parentNode;
    var list = item.parentNode;
    var div = document.createElement("div");
    div.style.width = "80%";
    div.style.margin = "auto";
    div.style.padding = "20px";
    div.style.backgroundColor = "white";
    div.style.borderRadius = "10px";
    div.style.boxShadow = "5px 5px 10px #888888";
    var h2 = document.createElement("h2");
    h2.innerHTML = name;
    h2.style.textAlign = "center";
    h2.style.fontFamily = "Arial, sans-serif";
    h2.style.fontSize = "28px";
    h2.style.color = "#00b300";
    div.appendChild(h2);
    var img = document.createElement("img");
    img.src = file.replace(".html", ".jpg");
    img.height = 300;
    img.width = 400;
    img.style.display = "block";
    img.style.margin = "auto";
    img.style.border = "5px solid #00b300";
    img.style.borderRadius = "10px";
    div.appendChild(img);
    var p = document.createElement("p");
    p.innerHTML = "Carregando...";
    p.style.fontFamily = "Arial, sans-serif";
    p.style.fontSize = "20px";
    p.style.color = "#00b300";
    p.style.textAlign = "justify";
    div.appendChild(p);
    document.body.appendChild(div);
    document.body.removeChild(list);
    document.body.removeChild(document.getElementsByTagName("p")[0]);
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if (xhr.status == 200) {
        var response = xhr.responseText;
        p.innerHTML = response;
      }
    };
    xhr.open("GET", file);
    xhr.send();
  }
  
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", loadRecipe);
    links[i].addEventListener("click", function(event) {
      event.preventDefault();
    });
  }
  