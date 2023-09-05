class Queue {
  private stack1: number[] = [];
  private stack2: number[] = [];

  /**
   * 入队
   */
  add(item: number) {
    this.stack1.push(item);
  }

  /**
   * 出队
   */
  delete(): number | null {
    let res;

    const stack1 = this.stack1;
    const stack2 = this.stack2;

    // 将 stack1 所有元素移动到 stack2 中
    while (stack1.length) {
      const item = stack1.pop();
      if (item != null) {
        stack2.push(item);
      }
    }

    res = stack2.pop();

    // 将 stack2 所有元素 “还给” stack1
    while (stack2.length) {
      const item = stack2.pop();
      if (item != null) {
        stack1.push(item);
      }
    }

    return res || null;
  }

  get length(): number {
    return this.stack1.length;
  }
}

export { Queue };
