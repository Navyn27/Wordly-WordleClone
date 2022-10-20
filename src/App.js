import "./App.css";
import Input_row from "./Input-row";
import Keyboard from "./Keyboard";

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const fields = document.getElementsByClassName("inputField");
    fields[0].style.animation = "none";
    fields[0].style.animation = "rotation 0.6s";
  }
});

function App() {
  return (
    <div className="App">
      <div>
        <h1>WORDLE~CLONE</h1>
      </div>
      <div className="rows">{Input_row()}</div>
      <p className="errorMessage">Error Message</p>
      <div className="keyboard">
        <Keyboard />{" "}
      </div>
    </div>
  );
}

export default App;
