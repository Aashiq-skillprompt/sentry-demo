// import { useState } from "react";
import skillLogo from "../assets/logo.png";
import roundedLogo from "../assets/rounded-logo.png";
import sentryLogo from "../assets/sentry-logo.png";
const HomePage = () => {
  // const [count, setCount] = useState(0);

  // const manualError = () => {
  //   throw new Error("this is manual error");
  // };
  // const logicalError = () => {
  //   try {
  //     throw new Error("this is logical error");
  //   } catch (e) {
  //     console.log("ddddd");
  //     throw new Error(e.message);
  //   }
  // };
  return (
    <>
      <div>
        <a href="#" target="_blank" rel="noreferrer">
          <img src={roundedLogo} className="logo react" alt="React logo" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <img src={skillLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <hr />
      <div>
        <h1>
          <a href="#" target="_blank" rel="noreferrer">
            <img src={sentryLogo} width={400} alt="Vite logo" />
          </a>
          <br />
          <span>Error Monitoring in Frontend</span>
        </h1>
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={manualError}>manual error</button>
        <button onClick={logicalError}>logical error</button>
      </div> */}
    </>
  );
};

export default HomePage;
