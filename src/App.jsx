import AccordianPractice from "./Accordian/accordian_practice.jsx";
import "./styles.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="grid-wrapper">
          <button
            onClick={() => {
              return <AccordianPractice />;
            }}
          >
            Accordian
          </button>
          <button onClick={() => <AccordianPractice />}>Accordian</button>
          <button onClick={() => <AccordianPractice />}>Accordian</button>
          <button onClick={() => <AccordianPractice />}>Accordian</button>
          <button onClick={() => <AccordianPractice />}>Accordian</button>
          <button onClick={() => <AccordianPractice />}>Accordian</button>
          <button onClick={() => <AccordianPractice />}>Accordian</button>
          <button onClick={() => <AccordianPractice />}>Accordian</button>
          <button onClick={() => <AccordianPractice />}>Accordian</button>
        </div>
      </div>
    </div>
  );
}
