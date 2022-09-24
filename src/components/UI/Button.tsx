import React, { ButtonHTMLAttributes, FC } from "react";
import { styled } from "../../styles/stitches.config";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...other }) => {
  return <CustomButton {...other}>{children}</CustomButton>;
};

export default Button;

Button.propTypes = {};
Button.defaultProps = {};

const CustomButton = styled("button", {
  border: "none",
  background: "transparent",
  cursor: "pointer",
});
