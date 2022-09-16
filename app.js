// ANAGRAMS: given two strings, write a function to determine if the second string is an anagram of the first. an anagram is a word , phrase formed by rearranging the letters o another: cinema: iceman

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let letter of first) {
    // if letter exists, increment otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let letter of second) {
    // can't find letter or letter is zero then its not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("amaw", "awam"));
