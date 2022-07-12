interface ButtonInterface {
  children?: React.ReactNode;
  onClick: () => void;
  className?: string;
  text: string;
}

export const PrimaryButton = ({
  text,
  className,
  onClick,
}: ButtonInterface) => {
  return (
    <button
      className={`px-8 text-sm text-white font-semibold bg-theme-main py-2 rounded-md ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const SecondaryButton = ({
  text,
  className,
  onClick,
}: ButtonInterface) => {
  return (
    <button
      className={`px-8 text-sm text-neutral-900 border border-gray-200 font-semibold bg-white py-2 rounded-md ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
