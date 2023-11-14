import React from "react";

export function Button(props) {
  const { btnTitle, btnClick } = props;
  return (
    <button
      className="mb-2 rounded-md bg-[#59167F] p-2 text-white dark:bg-[#715084]"
      onClick={btnClick}
    >
      {btnTitle}
    </button>
  );
}
