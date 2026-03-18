"use client";

import { useAuth, SignInButton, UserButton } from "@clerk/nextjs";
import SimpleUploadButton from "./simple-upload-button";
import Link from "next/link";

export default function TopNav() {
  const { isSignedIn } = useAuth();

  return (
    <nav className="flex h-24 w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>
        <Link href="/">Gallery</Link>
      </div>

      <div className="flex flex-row items-center gap-4">
        {isSignedIn ? (
          <>
            <SimpleUploadButton />
            <UserButton />
          </>
        ) : (
          <SignInButton mode="modal">
            <button>Sign In</button>
          </SignInButton>
        )}
      </div>
    </nav>
  );
}
