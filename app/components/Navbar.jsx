"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { status } = useSession();
  console.log(status);
  return (
    <div className="p-4 flex justify-between gap-2 shadow-md">
      <Link className="bg-red-700 text-white rounded-full" href={"/"}>
        NavBar
      </Link>
      {status === "authenticated" ? (
        <button
          onClick={() => signOut()}
          className="bg-red-700 text-white p-2 rounded-md"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="bg-teal-700 text-white p-2 rounded-md"
        >
          Sign In
        </button>
      )}
    </div>
  );
}
