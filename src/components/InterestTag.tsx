type InterestTagProps = {
  label: string;
};

export default function InterestTag({ label }: InterestTagProps) {
  return (
    <span className="cursor-default rounded-full border border-white/70 bg-white/50 px-3.5 py-1 text-sm font-medium text-ink/80 backdrop-blur-sm transition-colors duration-200 hover:bg-white hover:text-brand motion-reduce:transition-none">
      {label}
    </span>
  );
}
