import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function Header() {
  const user = null;

  return (
    <header
      className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
      style={{
        boxShadow: shadow,
      }}
    >
      <Link className="flex items-end gap-2" href="/">
        <Image
          src="/open_notes.jpg"
          alt="logo"
          width={60}
          height={60}
          className="rounded-full"
          priority
        />
        <h1 className="flex flex-col pb-1 text-2xl leading-6 font-semibold">
          Open Notes
        </h1>
      </Link>
      <div className="flex gap-4">
        {user ? (
          "Logout"
        ) : (
          <>
            <Button asChild>
              <Link href="/sign-up" className="hidden sm:block">
                Sign Up
              </Link>
            </Button>
            <Button asChild variant={"outline"}>
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
