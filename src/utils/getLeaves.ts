import { Tree } from "../tree";
import { createStack } from "./stack";

export default function getLeaves(tree: Tree): string[] {
  const leafNodes: string[] = [];
  const newStack = createStack(tree);

  while (!newStack.isEmpty()) {
    const currentNode = newStack.pop() as Tree;
    if (currentNode.kind === "leaf") {
      leafNodes.push(currentNode.result);
    } else {
      newStack.push(currentNode.yesSubtree, currentNode.noSubtree);
    }
  }
  return leafNodes;
}
