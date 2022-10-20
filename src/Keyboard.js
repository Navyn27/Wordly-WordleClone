import Delete from "./delete.svg";

const Keyboard = () => {
  return (
    <>
      <div>
        <button className="letterBtn">q</button>
        <button className="letterBtn">w</button>
        <button className="letterBtn">e</button>
        <button className="letterBtn">r</button>
        <button className="letterBtn">t</button>
        <button className="letterBtn">y</button>
        <button className="letterBtn">u</button>
        <button className="letterBtn">i</button>
        <button className="letterBtn">o</button>
        <button className="letterBtn">p</button>
      </div>
      <div>
        <button className="letterBtn">a</button>
        <button className="letterBtn">s</button>
        <button className="letterBtn">d</button>
        <button className="letterBtn">f</button>
        <button className="letterBtn">g</button>
        <button className="letterBtn">h</button>
        <button className="letterBtn">j</button>
        <button className="letterBtn">k</button>
        <button className="letterBtn">l</button>
      </div>
      <div>
        <button className="letterBtn enter">ENTER</button>
        <button className="letterBtn">z</button>
        <button className="letterBtn">x</button>
        <button className="letterBtn">c</button>
        <button className="letterBtn">v</button>
        <button className="letterBtn">b</button>
        <button className="letterBtn">n</button>
        <button className="letterBtn">m</button>
        <button className="letterBtn del">
          <img src={Delete} alt="DEL" />
        </button>
      </div>
    </>
  );
};

export default Keyboard;
