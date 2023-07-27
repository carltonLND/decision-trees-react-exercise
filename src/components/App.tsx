import "./App.css";
import { useState } from "react";
import createTree from "../exampleTrees/animalsQuizTree";

const questionTree = createTree();

export default function App() {
  const [currentNode, setCurrentNode] = useState(questionTree);

  const handleClick = (value: "yes" | "no") => {
    setCurrentNode((n) => {
      if (n.kind === "question") {
        return value === "yes" ? n.yesSubtree : n.noSubtree;
      }

      return n;
    });
  };

  return (
    <main className="App">
      Think of an animal from this list and I will try to guess it!
      <div>
        {currentNode.kind === "question"
          ? currentNode.question
          : currentNode.result}
      </div>
      {currentNode.kind === "question" && (
        <div>
          <button onClick={() => handleClick("yes")}>Yes</button>
          <button onClick={() => handleClick("no")}>No</button>
        </div>
      )}
      <button onClick={() => setCurrentNode(questionTree)}>Restart</button>
    </main>
  );
}
