import "./App.css";
import { useState } from "react";
import createTree from "../exampleTrees/animalsQuizTree";
import getLeaves from "../utils/getLeaves";
import RenderLeaves from "./RenderLeaves";

const questionTree = createTree();
const allLeaves = getLeaves(questionTree);

export default function App() {
  const [currentNode, setCurrentNode] = useState(questionTree);

  const handleClick = (answer: boolean) => {
    setCurrentNode((n) => {
      if (n.kind === "leaf") return n;
      return answer ? n.yesSubtree : n.noSubtree;
    });
  };

  return (
    <main className="App">
      <p>Think of an animal from this list and I will try to guess it!</p>
      <RenderLeaves
        validLeaves={getLeaves(currentNode)}
        allLeaves={allLeaves}
      />
      <div>
        {currentNode.kind === "question"
          ? currentNode.question
          : `We think your animal is a ${currentNode.result}`}
      </div>
      {currentNode.kind === "question" && (
        <div>
          <button onClick={() => handleClick(true)}>Yes</button>
          <button onClick={() => handleClick(false)}>No</button>
        </div>
      )}
      <button onClick={() => setCurrentNode(questionTree)}>Restart</button>
    </main>
  );
}
