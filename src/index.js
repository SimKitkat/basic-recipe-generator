function generateRecipe(event) {
  event.preventDefault();

  new Typewriter(".recipe-body", {
    strings: "Generating recipe",
    autoStart: true,
    dalay: 1,
  });
}

let recipeForm = document.querySelector(".recipe");
recipeForm.addEventListener("submit", generateRecipe);
