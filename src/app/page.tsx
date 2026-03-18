import { currentUser } from "@clerk/nextjs/server";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const user = await currentUser();

  if (!user) {
    return (
      <div className="h-full w-full text-center text-2xl">
        <div>Please sign in to view images</div>
      </div>
    );
  }

  const images = await getMyImages();

  return (
    <main className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              alt={image.name}
            />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </main>
  );
}
