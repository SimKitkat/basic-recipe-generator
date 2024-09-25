function displayRecipe(Response) {
  new Typewriter(".recipebody", {
    strings: Response.data.answer,
    autoStart: true,
    dalay: 1,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let recipeInput = document.querySelector("#recipe-input");
  let apiKey = "8b0a6ad4348ba4af0cb7ofe7df4t6b19";
  let apiContext =
    "You are a master baker who specializes in baking cookies. You are required to make a step-by-step basic cookie recipe by Include a list of ingredients, measurements, and detailed instructions.display the recipe in basic HTML format and seperate each line with a <br />. Do not include the prompt and the word `html` in your response. Make sure to use the user ingredient. Sign the recipe wit `SheCodes AI`";
  let apiPrompt = `user ingredient: ${recipeInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;

  let recipeElement = document.querySelector(".recipebody");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<span class="generating">⏳</span> Generating ${recipeInput.value} cookie recipe`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeForm = document.querySelector(".recipe");
recipeForm.addEventListener("submit", generateRecipe);
