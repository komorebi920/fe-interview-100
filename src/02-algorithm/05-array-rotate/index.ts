/**
 * 旋转数组 k 步 - 使用 pop 和 unshift
 * 时间复杂度：O(n^2)：循环 O(n) + unshift O(n)
 * 空间复杂度：O(1)：只定义了 length 和 step，变量是有限的
 */
function array_rotate_1(arr: number[], k: number): number[] {
  const length = arr.length;
  if (!k || length === 0) return arr;
  const step = Math.abs(k % length); // abs 取绝对值
  for (let i = 0; i < step; i++) {
    const n = arr.pop();
    if (n != null) {
      arr.unshift(n);
    }
  }
  return arr;
}



function array_rotate_2(arr: number[], k: number): number[] {
  const length = arr.length;
  if (!k || length === 0) return arr;
  const step = Math.abs(k % length); // abs 取绝对值
  const part1 = arr.slice(-step);
  const part2 = arr.slice(0, length - step);
  const part3 = part1.concat(part2);
  return part3;
}

export { array_rotate_1, array_rotate_2 };
