import { clerkClient } from "@clerk/nextjs/server";
import { getImage, deleteImage } from "~/server/queries";
import { Button } from "./ui/button";

export default async function FullPageImageView(props: { photoId: string }) {
  const idAsNumber = Number(props.photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);

  const client = await clerkClient();
  const uploaderInfo = await client.users.getUser(image.userId);

  return (
    <div className="flex h-full min-h-0 w-full text-white">
      <div className="flex flex-1 items-center justify-center bg-black">
        <img
          src={image.url}
          alt={image.name}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex w-80 flex-shrink-0 flex-col border-l">
        <div className="border-b p-3 text-center text-xl">{image.name}</div>

        <div className="p-3">
          <div className="text-sm opacity-70">Uploaded By</div>
          <div>{uploaderInfo.fullName}</div>
        </div>

        <div className="p-3">
          <div className="text-sm opacity-70">Created On</div>
          <div>{new Date(image.createdAt).toISOString()}</div>
        </div>

        <div className="p-3">
          <form
            action={async () => {
              "use server";

              await deleteImage(idAsNumber);
            }}
          >
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
