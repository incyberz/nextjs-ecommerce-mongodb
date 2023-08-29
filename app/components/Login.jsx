"use client";
import { BsGoogle } from "react-icons/bs";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Login() {
  const { status } = useSession();
  if (status === "authenticated") return;
  return (
    <div className="bg-red-500 p-4  h-screen ">
      <h2 className="text-xl mb-2">Please Login!</h2>
      <button
        onClick={() => signIn("google")}
        className="bg-blue-700 hover:bg-blue-600 text-white p-4 rounded-lg"
      >
        <div className="flex gap-2">
          <div className="bg-gray-100 text-gray-900 p-3 rounded-lg text-lg">
            <BsGoogle />
          </div>
          <div className="flex items-center text-lg">Sign in with Google</div>
        </div>
      </button>
    </div>
  );
}
