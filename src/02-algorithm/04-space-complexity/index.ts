// O(1)
function fn_o1(arr = []) {
  const a = arr[1];
  const b = arr[2];
  const c = arr[3];
  // ...
}

// O(n)
function fn_on(arr = []) {
  const arr2: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    arr2[i] = arr[i] + 10;
  }
}
