interface ButtonProps {
  onClick: () => void;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  disabled?: boolean;
}

export function Button({
  onClick,
  variant = "primary",
  children,
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-md transition-colors ${
        variant === "primary"
          ? "bg-yellow-500 hover:bg-yellow-600 text-black"
          : "bg-gray-200 hover:bg-gray-300 text-gray-700"
      } disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
