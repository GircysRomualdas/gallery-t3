import { db } from "~/server/db";
import { currentUser } from "@clerk/nextjs/server";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const user = await currentUser();

  if (!user) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-2xl">
        <div>Please sign in to view images</div>
      </div>
    );
  }

  const images = await getMyImages();

  return (
    <main className="flex flex-wrap gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <img src={image.url} alt={image.name} />
          <div>{image.name}</div>
        </div>
      ))}
    </main>
  );
}
