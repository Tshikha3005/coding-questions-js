// Remove Duplicates from Sorted Array
// nums = [1,1,2,2,3,3,4]

// 👉 Modify array so each element appears only once
// 👉 Return new length

function removeDuplicates(nums) {
  let newArr = [];
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] !== nums[right]) {
      newArr.push(nums[left]);
      left++;
    }
  }
}

const nums = [1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums), "removeDuplicates");
