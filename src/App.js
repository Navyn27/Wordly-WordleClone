import './App.css';
import Input_row from "./Input-row";

document.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
      const fields = document.getElementsByClassName("inputField");
      fields[0].style.animation = "none";
      fields[0].style.animation = "rotation 0.6s";
      // fields[0].style.animation = "display:block";

  } 
});

function App() {
  return (
    <div className="App">
      <div>
        <h1>WORDLE~CLONE</h1>
      </div>
      <div className="rows">
        {Input_row()}
        {Input_row()}
        {Input_row()}
        {Input_row()}
        {Input_row()}
        {Input_row()}
      </div>
    </div>
  );
}

export default App;
