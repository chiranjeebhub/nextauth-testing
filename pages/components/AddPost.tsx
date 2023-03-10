"use client";

import { useState } from "react";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [isDisbled, setIsDisabled] = useState(false);
  return (
    <form className="bg-white px-3 py-3 my-4 rounded-md">
      <div className="my-4">
        <textarea
          className="p-4 text-lg w-full rounded-md bg-gray-200"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="what's on your mind"
        ></textarea>
      </div>
      <div className={`flex items-center justify-between`}>
        <p
          className={`font-bold text-sm ${
            title.length > 300 ? "text-red-700" : "text-gray-500"
          }`}
        >
          {title.length}/300
        </p>
        <button
          disabled={isDisbled}
          className="text-sm px-4 py-2 bg-cyan-400 text-white rounded-md"
        >
          Create Post
        </button>
      </div>
    </form>
  );
}
