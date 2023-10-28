import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "title" }, "Heading 1");
const heading1 = (
    <h1 id="title">
        hello gooys!
    </h1>
)

const FunctionalComponent = ()=> (
    <div>
    {heading1}
  <h1>FunctionalComponent</h1>
  <h2>this is an h2 tag</h2>
  </div>
)

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent />);
