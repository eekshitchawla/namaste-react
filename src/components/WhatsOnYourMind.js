import React from "react";
import { MIND_URL } from "../utils/constants";

const WhatsOnYourMind = (mindArray) => {
  // console.log(mindArray);
  const disabledFunction = () => {
    alert("Working on the Feature");
  };
  return (
    <div className="w-[100%] mt-4 flex flex-col items-center">
      <div className="w-[80%] text-2xl">
        <strong>What's On Your Mind?</strong>
      </div>
      <div className="w-[80%] noScroll flex overflow-x-scroll">
        {mindArray?.mind?.map((item) => {
          return (
            <button key={item.id} onClick={disabledFunction}>
              <img
                className="max-w-none"
                style={{ height: "180px", width: "144px" }}
                src={MIND_URL + item.imageId}
                alt=""
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default WhatsOnYourMind;
