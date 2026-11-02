type InterestTagProps = {
  label: string;
};

export default function InterestTag({ label }: InterestTagProps) {
  return (
    <span className="cursor-default rounded-full border border-brand/30 bg-white/60 px-3 py-1 text-sm font-medium text-ink backdrop-blur-sm transition-colors duration-200 hover:border-brand hover:bg-brand hover:text-white">
      {label}
    </span>
  );
}
