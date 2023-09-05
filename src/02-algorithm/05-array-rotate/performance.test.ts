import { arrayRotate1, arrayRotate2 } from ".";

const arr1 = [];
for (let i = 0; i < 10 * 10000; i++) {
  arr1.push(i);
}
console.time("arrayRotate1");
arrayRotate1(arr1, 9 * 10000);
console.timeEnd("arrayRotate1"); // 885ms O(n^2)

const arr2 = [];
for (let i = 0; i < 10 * 10000; i++) {
  arr2.push(i);
}
console.time("arrayRotate2");
arrayRotate2(arr2, 9 * 10000);
console.timeEnd("arrayRotate2"); // 0.36ms O(1)
