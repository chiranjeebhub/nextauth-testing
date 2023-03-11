"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [isDisbled, setIsDisabled] = useState(false);

  // Create a Post

  const { mutate, isLoading } = useMutation(
    // axios post request
    async (title: string) =>
      await axios.post("/api/posts/addPostApi", { title }),
    {
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data?.message);
        }
        setIsDisabled(false);
      },
      onSuccess: (data) => {
        toast.success("Post Created Successfully 🔥");
        setTitle("");
        setIsDisabled(false);
      },
    }
  );

  const submitPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(true);
    mutate(title);
    // setTitle("");
    // setIsDisabled(false);
  };

  return (
    <form onSubmit={submitPost} className="bg-white px-3 py-3 my-4 rounded-md">
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
          type="submit"
          disabled={isDisbled}
          className="text-sm px-4 py-2 bg-cyan-400 text-white rounded-md disabled:opacity-25"
        >
          {isLoading ? "Creating Post ..." : "Create Post"}
        </button>
      </div>
    </form>
  );
}
