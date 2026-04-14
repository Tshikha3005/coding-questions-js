// Problem 1: Two Sum (Sorted Array)
// nums = [1,2,3,4,6], target = 6

// 👉 Output:

// [1, 4]  (2 + 4 = 6)

function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

const nums = [1, 2, 3, 4, 6];
const target = 6;
console.log(twoSum(nums, target), "twoSum");

// 🧠 Why this works
// Array is sorted → we can intelligently move pointers
