/*
<div id ="parend">
    <div id="child">
        <h1>Hello World</h1></div>
    <div id="child2">
        <h1>Hello World from child 2</h1></div>
</div>
*/
const head = React.createElement("div",{id:parent},[[
    React.createElement("h1",{key:1},"thids is children 1"),
    React.createElement("h2",{key:2},"this is children 1"),
],[
    React.createElement("h1",{key:3},"thids is children 3"),
    React.createElement("h2",{key:4},"this is children 4"),
]]);
console.log(head)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);

    
