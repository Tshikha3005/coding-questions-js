// Longest Substring with At Most K Distinct Characters
// You are given a string s consisting only lowercase alphabets and an integer k. Your task is to find the length of the longest substring that contains exactly k distinct characters.

// Note : If no such substring exists, return -1.

// Examples:

// Input: s = "aabacbebebe", k = 3
// Output: 7
// Explanation: The longest substring with exactly 3 distinct characters is "cbebebe", which includes 'c', 'b', and 'e'.

// function longestSubstringKDistinct(s, k) {
//   let len = s.length;
//   let j = 0;
//   let charCount = new Array(256).fill(0);
//   let maxLength = -1;
//   let count = 0;
//   debugger;
//   for (let i = 0; i < len; i++) {
//     charCount[s.charCodeAt(i)]++;
//     if (charCount[s.charCodeAt(i)] === 1) {
//       count++;
//     }
//     while (count > k) {
//       charCount[s.charCodeAt(j)]--;
//       if (charCount[s.charCodeAt(j)] === 0) {
//         count--;
//       }
//       j++;
//     }
//     if (count === k) {
//       maxLength = Math.max(maxLength, i - j + 1);
//     }
//   }
//   return maxLength;
// }

// const s = longestSubstringKDistinct("aabacbebebe", 3);
// console.log(s, "s");

//  when we need characters
// s = "eceba", k = 2
// Output = 3   // "ece"

function longestKdistent(s, k) {
  let charS = new Array(256).fill(0);
  let j = 0;
  let maxLength = 0;
  let startIndex = 0;
  let distinctCount = 0;

  for (let end = 0; end < s.length; end++) {
    // add character
    if (charS[s.charCodeAt(end)] === 0) {
      distinctCount++;
    }
    charS[s.charCodeAt(end)]++;

    // shrink
    while (distinctCount > k) {
      charS[s.charCodeAt(j)]--;

      if (charS[s.charCodeAt(j)] === 0) {
        distinctCount--;
      }

      j++;
    }

    // update answer
    if (end - j + 1 > maxLength) {
      maxLength = end - j + 1;
      startIndex = j;
    }
  }

  return s.substring(startIndex, startIndex + maxLength);
}
longestKdistent("eceba", 2);
