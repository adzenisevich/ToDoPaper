
function anagram (word1, word2) {
  arr1 = word1.split('').sort().join('');
  arr2 = word2.split('').sort().join('');
  
      return (arr1===arr2);          

}

console.log(anagram('lemon', 'eelon'));
