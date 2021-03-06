import { liveDemo } from "../../declarations/liveDemo";

liveDemo.getLastGreetedPerson().then(lastGreeted => {
  document.getElementById("lastGreeted").innerText = "The last greeted person was " + lastGreeted;
});

liveDemo.getGreetCount().then(greetCount => {
  document.getElementById("greetCount").innerText = greetCount + " shared greetings";
});

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const greeting = await liveDemo.greet(name);

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;

  return false;
});
