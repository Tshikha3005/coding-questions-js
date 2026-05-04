// You are given an array A of length N.  You take an array B of length N such that B[i] = 0 for each 1 <= i <= N. You can apply the following operation on B any number of times:

// Choose (N - 1) distinct indices and add 1 to each of those indices.
// Task

// Find the number of operations required to convert array B into array A by applying the given operation. Print -1 if it is impossible to do so.

// Function description

// Complete the function solve() provided in the editor. This function takes the following two parameters and returns the required answer:

// N: Represents the length of array A.
// A: Represents the array A.
// Input format

// Note: This is the input format that you must use to provide custom input (available above the Compile and Test button).

// The first line contains T, denoting the number of test cases. T also specifies the number of times you have to run the solve function on a different set of inputs.
// For each test case:
// The first line contains N, denoting the size of array A.
// The second line contains N space-separated integers A[1], A[2], ....., A[N], denoting the elements of  array A.
// Output format
// For each test case, print the number of operations required to convert array B into array A by applying the given operation or -1 if it is impossible to do so.

// Constraints

// Sample Input
// 2
// 3
// 3 1 0
// 2
// 0 2
// Sample Output
// -1
// 2
// Time Limit: 1
// Memory Limit: 256
// Source Limit:
// Explanation
// The first line denotes T = 2.

// For the first test case

// Given

// N = 3
// A = [3, 1, 0]
// ​​Approach

// It is impossible to convert B = [0, 0, 0] into A = [3, 1, 0] using the given operation. Thus, the answer is  -1.
// For the second test case

// Given

// N = 2
// A = [0, 2]
// ​​Approach

// Initially, B = [0, 0].
// Applying the operation on index i = 2 makes B = [0, 1].
// Applying the operation on index i = 2 makes B = [0, 2], which is equal to A. Thus, the answer is 2.

process.stdin.resume();
process.stdin.setEncoding("utf-8");

var input_ = "";

process.stdin.on("data", function (data) {
  input_ += data.toString().trim();
  input_ += "\n";
});
function solve(N, A) {
  // You must complete the logic for the function that is provided
  // before compiling or submitting to avoid an error.

  // Write your code here
  if (N === 0) return -1;
  if (N === 1) {
    return A[0] === 0 ? 0 : -1;
  }
  let sum = A.reduce((a, b) => a + b, 0);
  if (sum % (N - 1) !== 0) return -1;
  let k = sum / (N - 1);
  let maxA = Math.max(...A);
  if (k < maxA) return -1;
  return k;
}
process.stdin.on("end", function () {
  input_ = input_.replace(/\n$/, "");
  input_ = input_.split("\n");

  var idx_ = 0;
  var T = parseInt(input_[idx_++].trim(), 10);
  for (var t_i = 0; t_i < T; t_i++) {
    var N = parseInt(input_[idx_++].trim(), 10);
    var A = input_[idx_++]
      .trim()
      .split(" ")
      .map(function (el) {
        return parseInt(el, 10);
      });

    var out_ = solve(N, A);
    process.stdout.write(out_.toString());
    process.stdout.write("\n");
  }

  process.exit();
});

// Python solution
// def solve (N, A):
//     # Write your code here
//     total_sum=sum(A)
//     max_ele=max(A)
//     if total_sum%(N-1)!=0:
//         return -1
//     target_val=total_sum//(N-1)
//     if max_ele>target_val:
//         return -1
//     return target_val
//     pass
