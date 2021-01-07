const userName = "Hoon Oh";
const template = (
  <div>
    <h1>{userName}</h1>
    <p>Age: 30</p>
    <p>Location: Seoul</p>
  </div>
);

ReactDOM.render(template, document.querySelector("#root"));
