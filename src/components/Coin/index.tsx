import { ICoin } from "../../typings";
import { CoinWrapper, Crypto, Rate } from "./style";

const Coin = ({ cryptoCoin, rate }: ICoin) => {
    return (
        <CoinWrapper>
            <Crypto>{cryptoCoin}</Crypto>
            <Rate>
                <span>rate</span>
                <p>{rate.toFixed(2)}</p>
            </Rate>
        </CoinWrapper>
    );
}

export default Coin;