"use client";

import Giscus from "@giscus/react";

// GitHub Discussions 기반 댓글 (giscus)
// 글 경로(pathname)별로 Discussion이 하나씩 생성된다
export function Comments() {
  return (
    <section className="not-prose mt-16 border-t border-neutral-200 pt-10 dark:border-neutral-800">
      <Giscus
        repo="78-artilleryman/yun-blog"
        repoId="R_kgDOUR4Xbw"
        category="Announcements"
        categoryId="DIC_kwDOUR4Xb84DFM1n"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="ko"
        loading="lazy"
      />
    </section>
  );
}
