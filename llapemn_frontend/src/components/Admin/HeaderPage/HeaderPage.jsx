import React from "react";

export function HeaderPage(props) {
  const { title, btnTitle, btnClick } = props;
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold dark:text-white">{title}</h2>
      </div>

      <div>
        {btnTitle && (
          <button
            className="rounded-md bg-[#59167F] p-2 text-white dark:bg-[#B9CC00]"
            onClick={btnClick}
          >
            <h1 className="  font-bold dark:text-white">{btnTitle}</h1>
          </button>
        )}
      </div>
    </div>
  );
}
