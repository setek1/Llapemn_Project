import React from "react";

export function ModalBasic(props) {
  const { show, title, children, onClose } = props;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="w-[600px]">
        <div className="bg-white"> Modal</div>
      </div>
    </div>
  );
}
