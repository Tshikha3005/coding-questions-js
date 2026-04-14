// Smallest window in a String containing all characters of other String
// Given two strings s and p, the task is to find the smallest substring in s that contains all characters of p, including duplicates. If no such substring exists, return "". If multiple substrings of the same length are found, return the one with the smallest starting index.

// Examples:

// Input: s = "timetopractice", p = "toc"
// Output: toprac
// Explanation: "toprac" is the smallest substring in which "toc" can be found.

// Input: s = "zoomlazapzo", p = "oza"
// Output: apzo
// Explanation: "apzo" is the smallest substring in which "oza" can be found.

// function containsAllChars(str1, str2) {
//   for (let char of str2) {
//     if (!str1.includes(char)) {
//       return false;
//     }
//   }
//   return true;
// }

// function smallWindow(s1, s2) {
//   let minLength = Infinity;
//   let startIndex = -1;

//   for (let i = 0; i < s1.length; i++) {
//     for (let j = i + 1; j <= s1.length; j++) {
//       const substring = s1.slice(i, j);
//       console.log(minLength, substring);
//       if (containsAllChars(substring, s2)) {
//         if (substring.length < minLength) {
//           minLength = substring.length;
//           startIndex = i;
//         }
//       }
//     }
//   }

//   return startIndex !== -1 ? s1.slice(startIndex, startIndex + minLength) : "";
// }

// const result = smallWindow("timetopractice", "toc"); // toprac
// console.log(result);

// But we need to fillow below steps to optimize the solution:
// Initialize:
// A count array to store the frequency of characters in P.
// Another count array to track the characters in the current window of S.
// Variables to track the minimum window length and its start index.
// Expand the Window:
// Move the j pointer through S, updating the window's character counts.
// When all characters of P are present in the window, a valid window is found.
// Shrink the Window before updating result
// Move the start pointer right to minimize the window while ensuring all characters from P remain in the window.
// Track the smallest window during this process.
// Return Result:
// If a valid window is found, return the smallest substring. If no valid window exists, return "-1".

function smallWindow(s, p) {
  let len1 = s.length;
  let len2 = p.length;
  if (len1 < len2) return "";
  let countP = new Array(256).fill(0);
  let countS = new Array(256).fill(0);
  for (let char of p) {
    countP[char.charCodeAt(0)]++;
  }
  let start = 0;
  let startIdx = -1;
  let minLen = Infinity;
  let count = 0;
  debugger;
  for (let j = 0; j < len1; j++) {
    countS[s.charCodeAt(j)]++;
    console.log(
      countS,
      "countS",
      countP,
      "countP",
      count,
      "count",
      j,
      "j",
      start,
      "statt",
      startIdx,
      "startIdx",
      minLen,
      "minLen"
    );
    if (
      countP[s.charCodeAt(j)] !== 0 &&
      countS[s.charCodeAt(j)] <= countP[s.charCodeAt(j)]
    ) {
      count++;
    }
    if (count === len2) {
      // Try to minimize the window
      while (
        countS[s.charCodeAt(start)] > countP[s.charCodeAt(start)] ||
        countP[s.charCodeAt(start)] === 0
      ) {
        if (countS[s.charCodeAt(start)] > countP[s.charCodeAt(start)]) {
          countS[s.charCodeAt(start)]--;
        }
        start++;
      }

      // Update window size
      let length = j - start + 1;
      if (minLen > length) {
        minLen = length;
        startIdx = start;
      }
    }
  }

  if (startIdx === -1) {
    return "";
  }

  return s.substring(startIdx, startIdx + minLen);
}

const result = smallWindow("timetopractice", "toc"); // toprac
console.log(result);
