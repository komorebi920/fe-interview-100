import { arrayRotate1, arrayRotate2 } from ".";

describe("数组旋转", () => {
  it("arrayRotate1: 正常情况", () => {
    const k = 3;
    const res = arrayRotate1([1, 2, 3, 4, 5, 6, 7], k);
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("arrayRotate1: 数组为空", () => {
    const k = 3;
    const res = arrayRotate1([], k);
    expect(res).toEqual([]);
  });

  it("arrayRotate1: k 是负值", () => {
    const k = -3;
    const res = arrayRotate1([1, 2, 3, 4, 5, 6, 7], k);
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("arrayRotate1: k 是 0", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = 0;
    const res = arrayRotate1(arr, k);
    expect(res).toEqual(arr);
  });

  it("arrayRotate1: k 不是数字", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = "abc";
    // @ts-ignore
    const res = arrayRotate1(arr, k);
    expect(res).toEqual(arr);
  });

  it("arrayRotate2: 正常情况", () => {
    const k = 3;
    const res = arrayRotate2([1, 2, 3, 4, 5, 6, 7], k);
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("arrayRotate2: 数组为空", () => {
    const k = 3;
    const res = arrayRotate2([], k);
    expect(res).toEqual([]);
  });

  it("arrayRotate2: k 是负值", () => {
    const k = -3;
    const res = arrayRotate2([1, 2, 3, 4, 5, 6, 7], k);
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("arrayRotate2: k 是 0", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = 0;
    const res = arrayRotate2(arr, k);
    expect(res).toEqual(arr);
  });

  it("arrayRotate2: k 不是数字", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = "abc";
    // @ts-ignore
    const res = arrayRotate2(arr, k);
    expect(res).toEqual(arr);
  });
});
