"use client";

import { useAuth, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function TopNav() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  return (
    <nav className="flex h-22 w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>

      <div className="flex flex-row items-center gap-4">
        {isSignedIn ? (
          <>
            <UserButton />
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={() => {
                router.refresh();
              }}
            />
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
