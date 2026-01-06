import { type ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}
