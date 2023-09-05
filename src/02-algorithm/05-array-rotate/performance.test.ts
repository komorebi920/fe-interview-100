import { array_rotate_1, array_rotate_2 } from ".";

const arr1 = [];
for (let i = 0; i < 10 * 10000; i++) {
  arr1.push(i);
}
console.time("array_rotate_1");
array_rotate_1(arr1, 9 * 10000);
console.timeEnd("array_rotate_1"); // 885ms O(n^2)

const arr2 = [];
for (let i = 0; i < 10 * 10000; i++) {
  arr2.push(i);
}
console.time("array_rotate_2");
array_rotate_2(arr2, 9 * 10000);
console.timeEnd("array_rotate_2"); // 0.36ms O(1)
