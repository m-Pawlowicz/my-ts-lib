import { type ReactNode } from "react";
import { css } from "@emotion/react";

interface CardProps {
  children: ReactNode;
}

const cardStyles = css({
  backgroundColor: "white",
  border: "2px solid orange",
  borderRadius: "8px",
  padding: "1.5rem",
});

export function Card({ children }: CardProps) {
  return <div css={cardStyles}>{children}</div>;
}
