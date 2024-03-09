orange - 77
const findLargestNumber = numbers => Math.max(...numbers);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
// This is a comment
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
42 * 98
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
80 * grape
const greet = name => `Hello, ${name}!`;

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

kiwi + true

// This is a comment
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
