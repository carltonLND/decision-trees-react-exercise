import "./App.css";
import { useState } from "react";
import createTree from "../exampleTrees/animalsQuizTree";
import getLeaves from "../utils/getLeaves";

const questionTree = createTree();
const allLeaves = getLeaves(questionTree);

export default function App() {
  const [currentNode, setCurrentNode] = useState(questionTree);
  const [validLeaves, setValidLeaves] = useState(allLeaves);

  const handleClick = (value: "yes" | "no") => {
    if (currentNode.kind === "leaf") return;
    if (value === "yes") {
      setValidLeaves(() => getLeaves(currentNode.yesSubtree));
      setCurrentNode(currentNode.yesSubtree);
    } else {
      setValidLeaves(() => getLeaves(currentNode.noSubtree));
      setCurrentNode(currentNode.noSubtree);
    }
  };

  return (
    <main className="App">
      <p>Think of an animal from this list and I will try to guess it!</p>
      <p>{validLeaves.join(", ")}</p>
      <div>
        {currentNode.kind === "question"
          ? currentNode.question
          : `We think your animal is ${currentNode.result}`}
      </div>
      {currentNode.kind === "question" && (
        <div>
          <button onClick={() => handleClick("yes")}>Yes</button>
          <button onClick={() => handleClick("no")}>No</button>
        </div>
      )}
      <button
        onClick={() => {
          setValidLeaves(allLeaves);
          setCurrentNode(questionTree);
        }}
      >
        Restart
      </button>
    </main>
  );
}
