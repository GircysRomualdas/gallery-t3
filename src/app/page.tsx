import { currentUser } from "@clerk/nextjs/server";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

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
    <main className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              alt={image.name}
              width={500}
              height={500}
              style={{ objectFit: "contain" }}
            />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </main>
  );
}
