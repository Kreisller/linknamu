"use client";

type LinkCardProps = {
  title: string;
  url: string;
  // 카드 오른쪽에 표시할 작은 글자 (클릭 수 등)
  count?: string;
  onClick?: () => void;
};

export default function LinkCard({ title, url, count, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative flex h-14 w-full items-center justify-center rounded-2xl border border-white/60 bg-white/45 px-5 text-base font-medium text-ink shadow-card backdrop-blur-xl transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {title}
      {count !== undefined && (
        <span className="absolute right-5 text-xs font-normal tabular-nums text-ink/50">
          {count}
        </span>
      )}
    </a>
  );
}
