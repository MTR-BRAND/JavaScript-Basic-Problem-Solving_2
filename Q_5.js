function countVowels(str) {
    let vowels = 0;
    var string = str.toString();
    for (var i = 0; i <= string.length - 1; i++) {

        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            vowels += 1;
          }
    }

    return vowels;
  }
  
  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3
  

