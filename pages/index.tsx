import Head from "next/head";
import { Inter } from "next/font/google";

import Login from "./Login";
import Nav from "./Nav";
import AddPost from "./components/AddPost";
import AllPosts from "./components/AllPosts";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const allPosts = async () => {
    const { data } = await axios.get("/api/posts/getPostsApi");
    return data;
  };

  const { data, error, isLoading, refetch } = useQuery({
    queryFn: allPosts,
    queryKey: ["posts"],
  });

  if (error) return error;
  if (isLoading) return "Loading...";

  return (
    <>
      <Head>
        <title>Yeller - Yell at Everyone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 py-10 md:mx-48 xl:mx-96 relative">
        <div className="sticky top-0">
          <Nav />
          <AddPost refetch={refetch} />
        </div>
        {/* <AllPosts /> */}
        <AllPosts data={data} />
      </main>
    </>
  );
}
