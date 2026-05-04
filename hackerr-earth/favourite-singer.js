// //Problem
// Bob has a playlist of
//  songs, each song has a singer associated with it (denoted by an integer)

// Favourite singer of Bob is the one whose songs are the most on the playlist

// Count the number of Favourite Singers of Bob

// Input Format

// The first line contains an integer
// , denoting the number of songs in Bob's playlist.

// The following input contains
//  integers,
//  integer denoting the singer of the
//  song.

// Output Format

// Output a single integer, the number of favourite singers of Bob

// Note: Use 64 bit data type

// Constraints

// Sample Input
// 5
// 1 1 2 2 4
// Sample Output
// 2
// Time Limit: 1
// Memory Limit: 256
// Source Limit:
// Explanation
// In this example
// Songs of singer 1 and 2 appear 2 times(which is max) in this playlist
// Therefore the answer is 2
"use strict";

const fs = require("fs");

function solve() {
  // Read the entire input at once
  // Understanding the HackerEarth environment is often harder than the problem itself because it uses a low-level approach to reading data.In a local environment, you might be used to interactive prompts. In competitive programming, your code is connected to a "pipe" that dumps all the input data at once.1. The Input "Pipe" (fs.readFileSync(0))Think of 0 as the "Standard Input" file.The Data: When you run your code, HackerEarth "writes" the input into this file.readFileSync(0, "utf8"): This tells Node.js to go to that file, grab every single character (the numbers, the spaces, the newlines), and turn it into one giant string.2. The Tokenization (.trim().split(/\s+/))When you read the file, it looks like this: "5\n1 1 2 2 4\n".Your code can't "do math" on a string with newlines and spaces. You need to break it into a clean list of items (tokens)..trim(): Removes the "junk" at the very beginning or very end (like a trailing newline)..split(/\s+/): The \s+ is a Regular Expression that means "one or more spaces, tabs, or newlines." It slices the giant string wherever it sees a gap, leaving you with an array: ["5", "1", "1", "2", "2", "4"].3. The Pointer Strategy (current++)Once you have your array of tokens, you need to navigate it. Since the problem tells you exactly what order the data arrives in (First $N$, then the singers), you use a "pointer" (current):tokens[current++]: This is a shortcut. It says: "Give me the value at the current position, and then move the pointer to the next spot."This allows you to pull data out of the list one by one, just like pulling items off a conveyor belt.Why we do it this way?Speed: Calling fs.readFileSync(0) once is much faster than calling a "read line" function thousands of times.Safety: Many platforms use different newline characters (\n vs \r\n). By splitting on \s+, you ignore the type of newline and just focus on the numbers.The Lifecycle of your Code:HackerEarth: Injects the test case into the input stream.Your Code: Sucks up the entire stream into a string.Your Code: Chops the string into an array of words/numbers.Your Code: Loops through that array to build your frequency Map.Your Code: console.log() the answer back to the output stream.
  const input = fs.readFileSync(0, "utf8");
  console.log(input, "input");
  // .trim() removes leading/trailing whitespace
  // .split(/\s+/) splits by any whitespace (space, tab, newline)
  const tokens = input.trim().split(/\s+/);
  console.log(tokens, "tokens");
  if (tokens.length === 0) return;

  let current = 0;
  console.log(current, "current");
  const n = parseInt(tokens[current++]);

  const freqMap = new Map();
  let maxFreq = 0;

  for (let i = 0; i < n; i++) {
    const singer = tokens[current++];

    // Standard frequency map logic
    const count = (freqMap.get(singer) || 0) + 1;
    freqMap.set(singer, count);

    if (count > maxFreq) {
      maxFreq = count;
    }
  }

  // Count how many singers reached the maxFreq
  let favoriteSingersCount = 0;
  for (let count of freqMap.values()) {
    if (count === maxFreq) {
      favoriteSingersCount++;
    }
  }

  // Using console.log is usually safer and simpler on HackerEarth
  console.log(favoriteSingersCount);
}

solve();

// python solution
