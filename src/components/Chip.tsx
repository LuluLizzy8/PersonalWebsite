export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        inline-flex items-center
        px-3 py-1
        rounded-md
        border border-gray-200
        bg-white
        text-gray-600 text-sm
        shadow-[0_1px_0_rgba(0,0,0,0.06)]
      "
    >
      {children}
    </span>
  );
}