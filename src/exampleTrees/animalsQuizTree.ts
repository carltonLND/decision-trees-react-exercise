import { Tree } from "../tree";

export default function createTree(): Tree {
    return {
        kind: "question",
        question: "Does the animal have fur?",
        yesSubtree: {
            kind: "question",
            question: "Does the animal live in water?",
            yesSubtree: {
                kind: "leaf",
                result: "sea otter",
            },
            noSubtree: {
                kind: "leaf",
                result: "grizzly bear",
            },
        },
        noSubtree: {
            kind: "question",
            question: "Does the animal have feathers?",
            yesSubtree: {
                kind: "question",
                question: "Does the animal fly?",
                yesSubtree: {
                    kind: "leaf",
                    result: "bald eagle",
                },
                noSubtree: {
                    kind: "leaf",
                    result: "penguin",
                },
            },
            noSubtree: {
                kind: "leaf",
                result: "snake",
            },
        },
    };
}
