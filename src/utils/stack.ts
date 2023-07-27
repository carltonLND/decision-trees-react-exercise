export interface Stack<T> {
  push: (...items: T[]) => void;
  pop: () => T | undefined;
  isEmpty: () => boolean;
  peek: () => T | undefined;
}

export function createStack<T>(...stackFrom: T[]): Stack<T> {
  const stackItems: T[] = [...stackFrom];

  return {
    push: (...items: T[]) => {
      stackItems.push(...items);
    },
    pop: () => stackItems.pop(),
    isEmpty: () => stackItems.length === 0,
    peek: () => stackItems[stackItems.length - 1],
  };
}
