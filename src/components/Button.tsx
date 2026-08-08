interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="rounded-full border border-[rgba(160,205,175,0.5)] bg-white/70 px-4 py-2 text-sm italic text-[#7a8a72] shadow-sm transition duration-200 hover:scale-105 hover:bg-white/90"
      style={{ fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', serif" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
