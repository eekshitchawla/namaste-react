import React from "react";
import { MIND_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const WhatsOnYourMind = (mindArray) => {
  // console.log(mindArray);
  return (
    <div className="w-[100%] mt-4 flex flex-col items-center">
      <div className="w-[80%] text-2xl">
        <strong>What's On Your Mind?</strong>
      </div>
      <div className="w-[80%] noScroll flex overflow-x-scroll">
        {mindArray?.mind?.map((item) => {
          return (
            // item.action.link
            <Link to={"collections/" + item.id} key={item.id}>
              <img
                className="max-w-none"
                style={{ height: "180px", width: "144px" }}
                src={MIND_URL + item.imageId}
                alt=""
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WhatsOnYourMind;
