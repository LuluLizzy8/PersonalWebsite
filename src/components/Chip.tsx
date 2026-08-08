export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[rgba(160,205,175,0.35)] bg-[#f0f6f1] px-3 py-1 text-sm text-[#5a7a62] shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      {children}
    </span>
  );
}
