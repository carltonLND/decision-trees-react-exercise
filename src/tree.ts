export type Tree = QuestionNode | LeafNode;

export type LeafNode = {
    kind: "leaf";
    result: string;
};

export type QuestionNode = {
    kind: "question";
    question: string;
    yesSubtree: Tree;
    noSubtree: Tree;
};
