interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 bg-[#D8E2DC] font-semibold text-gray-600 rounded transition duration-200 hover:font-bold hover:scale-105"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
