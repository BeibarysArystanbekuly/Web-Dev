// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
//   }

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }

  let age = +prompt("Enter age");
checkAge(age); 