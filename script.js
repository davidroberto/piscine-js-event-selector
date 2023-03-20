// je cible le bouton et je le stocke dans une variable nommée button
const button = document.querySelector("button");
// j'ajoute un event listener sur le bouton
// qui me permet de savoir quand le bouton a été cliqué
// et quand il a été cliqué, j'execute une fonction
// addEventListener prend 2 paramètres : le type d'événement (click, hover etc) et la fonction à exécuter
button.addEventListener("click", () => {
  // je cible le texte
  // avec querySelector
  const text = document.querySelector(".hidden");
  // je change la propriété display de text
  // et je lui mets en "block" au lieu de "none" par défaut
  text.style.display = "block";
});
