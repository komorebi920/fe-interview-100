import { array_rotate_1, array_rotate_2 } from ".";

describe("数组旋转", () => {
  it("array_rotate_1: 正常情况", () => {
    const k = 3;
    const res = array_rotate_1([1, 2, 3, 4, 5, 6, 7], k);
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("array_rotate_1: 数组为空", () => {
    const k = 3;
    const res = array_rotate_1([], k);
    expect(res).toEqual([]);
  });

  it("array_rotate_1: k 是负值", () => {
    const k = -3;
    const res = array_rotate_1([1, 2, 3, 4, 5, 6, 7], k);
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("array_rotate_1: k 是 0", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = 0;
    const res = array_rotate_1(arr, k);
    expect(res).toEqual(arr);
  });

  it("array_rotate_1: k 不是数字", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = "abc";
    // @ts-ignore
    const res = array_rotate_1(arr, k);
    expect(res).toEqual(arr);
  });

  it("array_rotate_2: 正常情况", () => {
    const k = 3;
    const res = array_rotate_2([1, 2, 3, 4, 5, 6, 7], k);
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("array_rotate_2: 数组为空", () => {
    const k = 3;
    const res = array_rotate_2([], k);
    expect(res).toEqual([]);
  });

  it("array_rotate_2: k 是负值", () => {
    const k = -3;
    const res = array_rotate_2([1, 2, 3, 4, 5, 6, 7], k);
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("array_rotate_2: k 是 0", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = 0;
    const res = array_rotate_2(arr, k);
    expect(res).toEqual(arr);
  });

  it("array_rotate_2: k 不是数字", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = "abc";
    // @ts-ignore
    const res = array_rotate_2(arr, k);
    expect(res).toEqual(arr);
  });
});
