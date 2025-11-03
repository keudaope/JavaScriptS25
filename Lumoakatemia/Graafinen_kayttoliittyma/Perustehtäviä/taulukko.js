//const prompt=require("prompt-sync")({sigint:true}); 
let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  document.getElementById("vastaus").innerHTML =
  "Hello " + person + "! How are you today?";
}