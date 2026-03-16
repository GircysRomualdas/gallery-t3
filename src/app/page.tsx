import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockImages = [
  {
    key: "n1ozR3gHhwpUHiAKDQqHzYZF4Tl7B3fWPRE8LmAgdrO0Che9",
    url: "https://2hqedr2wx7.ufs.sh/f/n1ozR3gHhwpUHiAKDQqHzYZF4Tl7B3fWPRE8LmAgdrO0Che9",
  },
  {
    key: "n1ozR3gHhwpUMli82oaU6FHLjeIl7dCX4PSgRGWfA1DQVtK3",
    url: "https://2hqedr2wx7.ufs.sh/f/n1ozR3gHhwpUMli82oaU6FHLjeIl7dCX4PSgRGWfA1DQVtK3",
  },
  {
    key: "n1ozR3gHhwpU7sG1lnjuTAaGEkm2eSOWHBwlsQp35FZYNPzt",
    url: "https://2hqedr2wx7.ufs.sh/f/n1ozR3gHhwpU7sG1lnjuTAaGEkm2eSOWHBwlsQp35FZYNPzt",
  },
  {
    key: "n1ozR3gHhwpUNoULUZAVcjubSnRf0T12l7H3GF6hvxtkopYX",
    url: "https://2hqedr2wx7.ufs.sh/f/n1ozR3gHhwpUNoULUZAVcjubSnRf0T12l7H3GF6hvxtkopYX",
  },
  {
    key: "n1ozR3gHhwpUw4yepbizAFdeynzPYOtEUqHgGixKXMZCLIl1",
    url: "https://2hqedr2wx7.ufs.sh/f/n1ozR3gHhwpUw4yepbizAFdeynzPYOtEUqHgGixKXMZCLIl1",
  },
  {
    key: "n1ozR3gHhwpU0kfo3yJLug8VYibCGaNAHQKUxjs5DJrfmoPl",
    url: "https://2hqedr2wx7.ufs.sh/f/n1ozR3gHhwpU0kfo3yJLug8VYibCGaNAHQKUxjs5DJrfmoPl",
  },
  {
    key: "n1ozR3gHhwpUbTHQHfDvj3bJ1yBW2opf6erst4ucD78CMRGO",
    url: "https://2hqedr2wx7.ufs.sh/f/n1ozR3gHhwpUbTHQHfDvj3bJ1yBW2opf6erst4ucD78CMRGO",
  },
  {
    key: "n1ozR3gHhwpUHJs0BwqHzYZF4Tl7B3fWPRE8LmAgdrO0Che9",
    url: "https://2hqedr2wx7.ufs.sh/f/n1ozR3gHhwpUHJs0BwqHzYZF4Tl7B3fWPRE8LmAgdrO0Che9",
  },
  {
    key: "n1ozR3gHhwpUJJEiXusezFCIOQKk6aHqZylL8uhdUrBWGsw7",
    url: "https://2hqedr2wx7.ufs.sh/f/n1ozR3gHhwpUJJEiXusezFCIOQKk6aHqZylL8uhdUrBWGsw7",
  },
];

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.key} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
