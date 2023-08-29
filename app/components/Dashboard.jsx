"use client";
import { BsGoogle } from "react-icons/bs";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Dashboard() {
  const { status, data: session } = useSession();
  // console.log(data);
  if (status !== "authenticated") return;
  return (
    <div className="bg-red-500 p-4  h-screen ">
      <h2 className="text-xl mb-2">Welcome!</h2>
      {session?.user?.name}
      <Image
        src={session?.user?.image}
        width={60}
        height={60}
        alt="Your Profile"
      />
    </div>
  );
}
