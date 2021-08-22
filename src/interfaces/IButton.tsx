import React from "react";

export interface IButton {
  text: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
