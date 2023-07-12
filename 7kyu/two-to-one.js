// DESCRIPTION:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    const word = s1 + s2
    console.log(word)
    const sortedS1 = word.split("").sort().join("")
    let resultWord = ""
    for (let i=0; i<sortedS1.length; i++) {
      if (!resultWord.includes(sortedS1[i])) {
        resultWord += sortedS1[i]
      }
    }
    return resultWord
  }