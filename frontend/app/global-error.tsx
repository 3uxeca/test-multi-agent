"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="ko">
      <body className="min-h-screen bg-[#f7f5ef] text-[#121212] antialiased">
        <main className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-4 py-10 sm:px-6">
          <section className="w-full rounded-[28px] border border-[rgba(21,21,21,0.1)] bg-[rgba(255,255,255,0.82)] p-8">
            <p className="text-sm font-semibold text-[#5f5b56]">전역 오류</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              애플리케이션을 표시할 수 없습니다
            </h1>
            <p className="mt-4 text-base leading-7 text-[#5f5b56]">
              예기치 않은 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-6 inline-flex rounded-full bg-[#0f766e] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              다시 시도
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
