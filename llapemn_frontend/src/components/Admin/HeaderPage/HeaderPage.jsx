import React from "react";

export function HeaderPage(props) {
  const { title, btnTitle, btnClick } = props;
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-4xl">{title}</h2>
      </div>

      <div>
        {btnTitle && (
          <button
            className="rounded-md bg-[#59167F] p-2 text-white"
            onClick={btnClick}
          >
            {btnTitle}
          </button>
        )}
      </div>
    </div>
  );
}
