import { ICard } from "../../typings";
import { CardDiv } from "./style";

const Card = ({ children }: ICard) => {
  return <CardDiv>{children}</CardDiv>;
};

export default Card;
