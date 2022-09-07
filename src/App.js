import './App.css';
import Input_row from "./Input-row";

document.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
      alert("Enter pressed!")
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
