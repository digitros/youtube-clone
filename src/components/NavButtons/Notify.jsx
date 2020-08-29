import React, { useState, useEffect } from "react";

const Notify = ({ actualDrop, stateChange }) => {
  const [drop, setDrop] = useState(false);

  const displayDropdown = () => {
    setDrop(!drop);
    stateChange("Notify", !drop);
  };

  useEffect(() => {
    if (actualDrop === false && drop === true) {
      setDrop(!drop);
    }
  }, [actualDrop]);

  const videoGenerator = (videos) => {
    const videoList = [...Array(videos)].map(() =>
      Math.ceil(Math.random() * 40)
    );
    return videoList.map((num, index) => {
      const src = `https://picsum.photos/86/50?random=${num}`;
      return (
        <div key={index} className="notificaciones__video">
          <div className="pic"></div>
          <div className="notificaciones__video--text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi!
            </p>
            <p>Lorem, ipsum.</p>
          </div>
          <div>
            <img src={src} alt="" />
          </div>
          <div className="notificaciones__video--more">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              fill="#606060"
              width="24px"
            >
              <g>
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
              </g>
            </svg>
          </div>
        </div>
      );
    });
  };

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
          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
        </g>
      </svg>

      <div
        className={
          drop ? "dropdown notificaciones displayBlock" : "dropdown displayNone"
        }
      >
        <div className="notificaciones__head">
          <h3>Notificaciones</h3>
          <div>
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              fill="#606060"
            >
              <g>
                <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.1-1.65c.2-.15.25-.42.13-.64l-2-3.46c-.12-.22-.4-.3-.6-.22l-2.5 1c-.52-.4-1.08-.73-1.7-.98l-.37-2.65c-.06-.24-.27-.42-.5-.42h-4c-.27 0-.48.18-.5.42l-.4 2.65c-.6.25-1.17.6-1.7.98l-2.48-1c-.23-.1-.5 0-.6.22l-2 3.46c-.14.22-.08.5.1.64l2.12 1.65c-.04.32-.07.65-.07.98s.02.66.06.98l-2.1 1.65c-.2.15-.25.42-.13.64l2 3.46c.12.22.4.3.6.22l2.5-1c.52.4 1.08.73 1.7.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.6-.25 1.17-.6 1.7-.98l2.48 1c.23.1.5 0 .6-.22l2-3.46c.13-.22.08-.5-.1-.64l-2.12-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="notificaciones__videos">{videoGenerator(15)}</div>
      </div>
    </div>
  );
};

export default Notify;
