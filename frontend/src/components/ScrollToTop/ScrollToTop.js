import React, { useEffect, useState } from "react";
import { KeyboardDoubleArrowUpOutlined } from "@mui/icons-material";

function ScrollToTop() {
  const [showBtn, setShowBtn] = useState(true);
  window.onscroll = () => {
    if (window.scrollY > 700 || document.body.scrollTop > 700) {
      // console.log(window.scrollY);
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };
  console.log("re-render-scroll");

  return (
    <>
      {showBtn && (
        <button
          className="sroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <KeyboardDoubleArrowUpOutlined className="icon"></KeyboardDoubleArrowUpOutlined>
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
