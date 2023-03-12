"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

export default function AllPosts({ data }: any) {
  // fetch all posts

  //   const allPosts = async () => {
  //     const { data } = await axios.get("/api/posts/getPostsApi");
  //     return data;
  //   };

  //   const { data, error, isLoading, refetch } = useQuery({
  //     queryFn: allPosts,
  //     queryKey: ["posts"],
  //   });

  //   if (error) return error;
  //   if (isLoading) return "Loading...";
  //   console.log(data);
  return (
    <div className="">
      {data?.map((item: any) => {
        return (
          <div key={item?.id} className="bg-white mb-4 rounded-md p-4">
            <div className="flex items-center pb-5">
              <Image
                src={item.user.image}
                alt=""
                width={30}
                height={30}
                className="rounded-full"
              />
              <h3 className="font-semibold pl-2 text-gray-500">
                {item.user.name}
              </h3>
            </div>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}
