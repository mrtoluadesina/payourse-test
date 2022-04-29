import { IButton } from "../../typings";
import { Btn } from "./style";

const Button = ({ children }: IButton) => {
  return <Btn>{children}</Btn>;
};

export default Button;
