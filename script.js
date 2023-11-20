// Este é o arquivo JavaScript do site de receitas com pimenta biquinho

// Criar uma função para gerar um número aleatório entre 0 e 3
function randomIndex() {
    return Math.floor(Math.random() * 4);
  }
  
  // Criar uma função para exibir uma receita aleatória na tela
  function showRandomRecipe() {
    // Obter a lista de receitas do documento HTML
    var recipes = document.getElementsByTagName("li");
    // Obter um índice aleatório
    var index = randomIndex();
    // Obter o link da receita correspondente ao índice
    var link = recipes[index].firstChild;
    // Abrir o link em uma nova janela
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
  