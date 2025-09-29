"use client";

type ButtonGroupProps = {
  leftButton: {
    text: string;
    onClick: () => void;
    className?: string;
  };
  rightButton: {
    text: string;
    onClick: () => void;
    className?: string;
  };
  containerClassName?: string;
};

export default function ButtonGroup({
  leftButton,
  rightButton,
  containerClassName = "flex justify-end space-x-3 p-6",
}: ButtonGroupProps) {
  return (
    <div className={containerClassName}>
      <button
        type="button"
        onClick={leftButton.onClick}
        className={
          leftButton.className ??
          "px-4 py-2 rounded-lg border text-gray-600 cursor-pointer"
        }
      >
        {leftButton.text}
      </button>
      <button
        type="button"
        onClick={rightButton.onClick}
        className={
          rightButton.className ??
          "px-4 py-2 rounded-lg bg-red-500 text-white cursor-pointer"
        }
      >
        {rightButton.text}
      </button>
    </div>
  );
}
