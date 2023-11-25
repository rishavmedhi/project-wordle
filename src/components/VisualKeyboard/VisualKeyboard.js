import React from "react";

const keys = [
  { Q: {}, W: {}, E: {}, R: {}, T: {}, Y: {}, U: {}, I: {}, O: {}, P: {} },
  { A: {}, S: {}, D: {}, F: {}, G: {}, H: {}, J: {}, K: {}, L: {} },
  { Z: {}, X: {}, C: {}, V: {}, B: {}, N: {}, M: {} },
];

function VisualKeyboard({ keyboardMap }) {
  return (
    <div className="keyboard">
      {keys.map((keyRow, index) => {
        return (
          <div className="keyRow" key={index}>
            {Object.entries(keyRow).map((value) => {
              return (
                <div
                  className={`key ${
                    keyboardMap[value[0]] ? keyboardMap[value[0]] : ""
                  }`}
                  key={value[0]}
                >
                  {value[0]}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default VisualKeyboard;
