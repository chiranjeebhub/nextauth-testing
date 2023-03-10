import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Login() {
  const { data: session } = useSession();

  console.log("session", session);

  return (
    <>
      {!session && (
        <>
          <button
            onClick={() => signIn()}
            className="ml-5 px-3 py-2 bg-cyan-400 text-white rounded-md"
          >
            Sign in
          </button>
        </>
      )}
      {session && (
        <div className="flex items-center">
          <button
            onClick={() => signOut()}
            className="text-sm px-3 py-1 mr-4 bg-cyan-400 text-white rounded-md"
          >
            Sign out
          </button>

          <Image
            src={session?.user?.image as any}
            width={40}
            height={40}
            alt=""
            className="rounded-full"
          />

          {/* <div className="text-xl font-semibold">{session?.user?.name}</div> */}
        </div>
      )}
    </>
  );
}
