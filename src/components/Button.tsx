interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="rounded-full border border-[rgba(110,160,130,0.7)] bg-[rgba(244,250,247,0.97)] px-6 py-3 text-base italic text-[#3d5e4a] shadow-sm transition duration-200 hover:scale-105 hover:bg-white"
      style={{ fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', serif" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
