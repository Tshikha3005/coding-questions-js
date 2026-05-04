// Problem
// You are given a table with
//  rows and
//  columns. Each cell is colored with white or black. Considering the shapes created by black cells, what is the maximum border of these shapes? Border of a shape means the maximum number of consecutive black cells in any row or column without any white cell in between.

// A shape is a set of connected cells. Two cells are connected if they share an edge. Note that no shape has a hole in it.

// Input format

// The first line contains
//  denoting the number of test cases.
// The first line of each test case contains integers
//  denoting the number of rows and columns of the matrix. Here, '#' represents a black cell and '.' represents a white cell.
// Each of the next
//  lines contains
//  integers.
// Output format

// Print the maximum border of the shapes.

// Sample Input
// 10
// 2 15
// .....####......
// .....#.........
// 7 9
// ...###...
// ...###...
// ..#......
// .####....
// ..#......
// ...#####.
// .........
// 18 11
// .#########.
// ########...
// .........#.
// ####.......
// .....#####.
// .....##....
// ....#####..
// .....####..
// ..###......
// ......#....
// ....#####..
// ...####....
// ##.........
// #####......
// ....#####..
// ....##.....
// .#######...
// .#.........
// 1 15
// .....######....
// 5 11
// ..#####....
// .#######...
// ......#....
// ....#####..
// ...#####...
// 8 13
// .....######..
// ......##.....
// ########.....
// ...#.........
// .............
// #######......
// ..######.....
// ####.........
// 7 5
// .....
// ..##.
// ###..
// ..##.
// .....
// ..#..
// .#...
// 14 2
// ..
// #.
// ..
// #.
// ..
// #.
// ..
// ..
// #.
// ..
// ..
// ..
// #.
// ..
// 7 15
// .###########...
// ##############.
// ...####........
// ...##########..
// .......#.......
// .....#########.
// .#######.......
// 12 6
// #####.
// ###...
// #.....
// ##....
// ###...
// ......
// .##...
// ..##..
// ...#..
// ..#...
// #####.
// ####..
"use strict";

const fs = require("fs");

function solve() {
  debugger;
  const input = fs.readFileSync(0, "utf8").split(/\s+/);
  let idx = 0;

  const t = parseInt(input[idx++]);

  for (let tc = 0; tc < t; tc++) {
    const n = parseInt(input[idx++]);
    const m = parseInt(input[idx++]);

    const grid = [];
    for (let i = 0; i < n; i++) {
      grid.push(input[idx++]);
    }

    let maxBorder = 0;

    // Check Rows
    for (let i = 0; i < n; i++) {
      let segments = grid[i].split(".");
      for (let seg of segments) {
        maxBorder = Math.max(maxBorder, seg.length);
      }
    }

    // Check Columns
    for (let j = 0; j < m; j++) {
      let count = 0;
      for (let i = 0; i < n; i++) {
        if (grid[i][j] === "#") {
          count++;
          maxBorder = Math.max(maxBorder, count);
        } else {
          count = 0;
        }
      }
    }

    console.log(maxBorder);
  }
}

solve();
