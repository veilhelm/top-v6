function mapCharacters(str) {
  return str.split('').reduce((charMap, char) => {
    charMap[char] = charMap[char] + 1 || 1;

    return charMap;
  }, {});
}

console.log(mapCharacters('holllllla'));

// && -> and
// || -> or

// true && true -> true
// true && false -> false
// false && false -> false
// false && true -> false

// true || true -> true
// true || false -> true
// false || false -> false
// false || true -> true
