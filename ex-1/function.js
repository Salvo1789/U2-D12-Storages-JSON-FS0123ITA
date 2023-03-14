function getName() {
    return localStorage.getItem("userName");
  }
  
function updateHTML() {
  var name = getName();
}
  
function saveName() {
  // Gets input value
  var name = document.getElementById("yourName").value;
  
   // Saves data to retrieve later
  localStorage.setItem("userName", name);
  
  var text = document.getElementById("savedData");
  text.innerText = localStorage.getItem("userName");
  // Updates HTML
  updateHTML();
}

function removeName() {

  var text = document.getElementById("savedData");  
  text.innerText = "";
  // Saves data to retrieve later
  localStorage.removeItem("userName");

    
   // Updates HTML
  updateHTML();
}