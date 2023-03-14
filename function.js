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
    
    // Updates HTML
    updateHTML();
  }

  function removeName() {
    
    // Saves data to retrieve later
    localStorage.removeItem("userName");
    
    // Updates HTML
    updateHTML();
  }