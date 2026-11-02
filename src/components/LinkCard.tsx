type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-14 w-full items-center justify-center rounded-2xl border border-white/70 bg-white/60 px-5 text-base font-medium text-ink shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(14,165,233,0.18)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {title}
    </a>
  );
}
