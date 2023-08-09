import React from "react";

export function Error404() {
  return (
    <div class="flex h-screen items-center justify-center bg-gray-200">
      <div class="text-center">
        <h1 class="text-4xl font-medium">404</h1>
        <p class="m-6 text-xl font-medium">
          Sorry, the page you're looking for can't be found.
        </p>
        <a
          href="/"
          class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
