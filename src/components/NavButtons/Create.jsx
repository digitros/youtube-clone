import React, { useState, useEffect } from "react";

const Create = ({ actualDrop, stateChange }) => {
  const [drop, setDrop] = useState(false);

  const displayDropdown = () => {
    setDrop(!drop);
    stateChange("Create", !drop);
  };

  useEffect(() => {
    if (actualDrop === false && drop === true) {
      setDrop(!drop);
    }
  }, [actualDrop]);

  return (
    <div className="dropdownBtn" onClick={() => displayDropdown()}>
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className="crear"
        fill="#606060"
      >
        <g>
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path>
        </g>
      </svg>
      <div className={drop ? "dropdown displayBlock" : "dropdown displayNone"}>
        <div className="Aside__active--buttons">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            fill="#606060"
          >
            <g>
              <path
                d="M19,4H5A2.15,2.15,0,0,0,3,6V18a2.15,2.15,0,0,0,2,2H19a2.15,2.15,0,0,0,2-2V6A2.15,2.15,0,0,0,19,4ZM5,18H19V6H5Z"
                fill="#6f6f6f"
              ></path>
              <path d="M15,12,10,8v8Z" fill="#f80000"></path>
            </g>
          </svg>
          <p>Principal</p>
        </div>
        <div className="Aside__active--buttons">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            fill="#606060"
          >
            <g>
              <path
                d="M23,12a11,11,0,0,1-3.22,7.78l-1.41-1.41a9,9,0,0,0,0-12.73l1.41-1.41A11,11,0,0,1,23,12ZM5.64,5.64,4.22,4.22a11,11,0,0,0,0,15.56l1.41-1.41a9,9,0,0,1,0-12.73ZM16.95,7.05,15.54,8.46a5,5,0,0,1,0,7.07l1.41,1.41a7,7,0,0,0,0-9.9Zm-9.9,0a7,7,0,0,0,0,9.9l1.41-1.41a5,5,0,0,1,0-7.07Z"
                fill="#6f6f6f"
              ></path>
              <path d="M12,9a3,3,0,1,1-3,3,3,3,0,0,1,3-3" fill="#f80000"></path>
            </g>
          </svg>
          <p>Tendencias</p>
        </div>
      </div>
    </div>
  );
};

export default Create;
