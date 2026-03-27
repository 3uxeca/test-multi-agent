export default function NotFound() {
  return (
    <main className="min-h-screen bg-[color:var(--bg-surface)] text-[color:var(--text-primary)]">
      <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-4 py-10 sm:px-6">
        <section className="w-full rounded-[28px] border border-[color:var(--border-subtle)] bg-[color:var(--bg-card)] p-8 shadow-glow">
          <p className="text-sm font-semibold tracking-normal text-[color:var(--text-secondary)]">
            페이지 없음
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            요청한 페이지를 찾을 수 없습니다
          </h1>
          <p className="mt-4 text-base leading-7 text-[color:var(--text-secondary)]">
            주소가 잘못되었거나 페이지가 이동되었을 수 있습니다. 첫 화면으로 돌아가 다시 확인해 주세요.
          </p>
          <a
            href="/"
            className="mt-6 inline-flex rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            홈으로 이동
          </a>
        </section>
      </div>
    </main>
  );
}
