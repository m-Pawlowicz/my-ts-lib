import { type ReactNode } from "react";
import { css } from "@emotion/react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const buttonStyles = css({
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  border: "2px solid #646cff",
  borderRadius: "8px",
  backgroundColor: "#1a1a1a",
  color: "white",
  cursor: "pointer",
  transition: "border-color 0.25s",
  "&:hover": {
    borderColor: "#535bf2",
  },
  "&:focus, &:focus-visible": {
    outline: "4px auto -webkit-focus-ring-color",
  },
});

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button css={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
}
