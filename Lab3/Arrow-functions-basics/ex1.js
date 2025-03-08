function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  
  ask(
    "Do you agree?",
    alert => alert("You agreed"),
    alert => alert("You canceled the execution.")
  );