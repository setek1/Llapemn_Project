import React from "react";

export function Error404() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-medium">404</h1>
        <p className="m-6 text-xl font-medium">
          Sorry, the page you're looking for can't be found.
        </p>
        <a
          href="/"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
