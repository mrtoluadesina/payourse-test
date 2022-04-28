import { ITypography } from "../../typings";

const Heading: React.FC<ITypography> = ({ text }) => {
    return (
        <h1>{text}</h1>
    );
}

export default Heading;