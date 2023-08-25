// import React from "react";

const card = () => {
  //logical error
  const simulateManualError = () => {
    try {
      const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);

      const result = num1 / num2;
      if (isNaN(result)) {
        throw new Error("input must be a number");
      }
      document.getElementById("result").textContent = "Result: " + result;
    } catch (e) {
      throw new Error(e.message);
    }
  };

  //Reference error
  const simulateReferenceError = () => {
    nonExistentFunction();
  };

  //type error
  const simulateTypeError = () => {
    var value = null;
    value.toUpperCase();
  };

  return (
    <div>
      <div className="card-list">
        {/* card1 */}
        <div className="basic-card-aqua">
          <div className="card-title">
            <span>Manual Error</span>
          </div>
          <div className="card-body">
            <div className="input-field">
              <div>
                <label htmlFor="num1">Num 1:</label>
                <input type="text" id="num1" name="num1" />
              </div>
              <div>
                <label htmlFor="num2">Num 2:</label>
                <input type="text" id="num2" name="num2" />
              </div>

              <p id="result"></p>
            </div>
            <div className="buttonn">
              <button type="button" onClick={simulateManualError}>
                Trigger Manual Error
              </button>
            </div>
          </div>
        </div>
        {/* card2 */}
        <div className="basic-card-aqua">
          <div className="card-title">
            <span>Reference Error</span>
          </div>
          <div className="card-body">
            <div className="buttonn">
              <button type="button" onClick={simulateReferenceError}>
                Trigger Reference Error
              </button>
            </div>
          </div>
        </div>
        {/* card3 */}
        <div className="basic-card-aqua">
          <div className="card-title">
            <span>Type Error</span>
          </div>
          <div className="card-body">
            <div className="buttonn">
              <button type="button" onClick={simulateTypeError}>
                Trigger Type Error
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
