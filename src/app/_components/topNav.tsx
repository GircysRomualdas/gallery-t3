"use client";

import { useAuth, SignInButton, UserButton } from "@clerk/nextjs";

export default function TopNav() {
  const { isSignedIn } = useAuth();

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>

      <div>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <SignInButton mode="modal">
            <button>Sign In</button>
          </SignInButton>
        )}
      </div>
    </nav>
  );
}
