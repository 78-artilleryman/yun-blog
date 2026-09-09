import Link from "next/link";
import { getPosts } from "@/lib/posts";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <section className="mb-14">
        <h1 className="text-lg font-semibold tracking-tight">윤병현</h1>
        <p className="mt-1 text-neutral-500 dark:text-neutral-400">
          웹 프론트엔드 개발자
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
          소개
        </h2>
        <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
          더 나은 사용자 경험과 개발자 경험을 고민하며 개발합니다.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
          글
        </h2>
        <ul className="flex flex-col">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group -mx-3 flex flex-col gap-2 rounded-lg px-3 py-3 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                <span className="flex items-baseline justify-between gap-4">
                  <span className="font-medium">{post.title}</span>
                  <time
                    dateTime={post.date}
                    className="shrink-0 text-sm text-neutral-500 dark:text-neutral-400"
                  >
                    {formatDate(post.date)}
                  </time>
                </span>
                <span className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {post.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
