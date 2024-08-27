function binary(arr, size, nums) {
  let start = 0;
  let end = size - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (arr[mid] == nums) {
      return mid;
    } else if (nums > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return -1;
}

let arr = [2, 4, 7, 8, 9, 10];

// console.log(binary(arr, arr.length, 9));

// Find First and Last Position of Element in Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function firstPostionOfElement(nums, target) {
  // console.log(nums.length);
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);
  let result = -1;

  while (start <= end) {
    if (nums[mid] === target) {
      result = mid;
      end = mid - 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return result;
}

function lastPostionOfElement(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);
  let result = -1;

  while (start <= end) {
    if (nums[mid] == target) {
      result = mid;
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return result;
}

var searchRange = function (nums, target) {
  let arr = [];

  let firstElement = firstPostionOfElement(nums, target);
  let lastElement = lastPostionOfElement(nums, target);

  arr.push(firstElement, lastElement);
  return arr;
};

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));

// . Search Insert Position

function InsertPosition(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      end = mid - 1;
      nums.push(target);
      nums.sort();

      return nums;
    } else {
      start = mid + 1;
      nums.push(target);
      nums.sort();
    }
    mid = Math.floor((start + end) / 2);
  }
  return;
}

console.log(InsertPosition([1, 3, 5, 6], 5));
