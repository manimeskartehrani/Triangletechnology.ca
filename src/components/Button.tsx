import React from "react";

const Button = ({ text, size }: { text: string; size?: string }) => {
  return (
    <button
      className={
        "relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] " +
        `${size}`
      }
    >
      <div className="absolute inset-0 ">
        <div className="rounded-lg border border-white/20 absolute inset-0 mask-image-gradient-to-t from-black to-transparent"></div>
        <div className="rounded-lg border absolute inset-0 border-white/40 mask-image-gradient-to-t from-black to-transparent "></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
      </div>
      <span>{text}</span>
    </button>
  );
};

export default Button;
