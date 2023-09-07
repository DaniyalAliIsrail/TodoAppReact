import React from "react";

const Button = (props) => {
  const {title,trigger } =props
  return (
    <>
      <button type="button" className={`text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-purple-300 text-[1.2rem]
      rounded-full text-sm px-5 py-2.5 text-center `} onClick={trigger}>{title}</button>
    </>
  );
};

export default Button;
