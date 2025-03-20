(function () {
  let names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

  for (let i = 0; i < names.length; i++) {
      if (names[i].charAt(0).toLowerCase() === 'j') {
          bye.speak(names[i]);
      } else {
          hello.speak(names[i]);
      }
  }

  console.log("-----------------------------------------------------------------------");
  function myTest(name) {
    let sumWeight = 0;
    
    for (let i = 0; i < name.length; i++) {
        sumWeight += name.charCodeAt(i);
    }
    
    let avgWeight = sumWeight / name.length;

    return avgWeight > 100;
}

  for (let i = 0; i < names.length; i++) {
      if (myTest(names[i])) {
          hello.speak(names[i]);
      } else {
          bye.speak(names[i]);
      }
  }
})();
