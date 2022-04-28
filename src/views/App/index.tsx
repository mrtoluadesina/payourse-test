import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Card, Coin, Search } from "../../components";
import { IList } from "../../typings";
import { ListAppContainer, ListContent, SearchList } from "./style";

const ListApp = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<IList>({} as IList);
  const [error, setError] = useState<Error | null>(null);
  const [searchValue, setSearchValue] = useState("");

  const coins = Object.entries(list).filter(([key]) =>
    key.toLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  useEffect(() => {
    const fetchList = async () => {
      setLoading(true);
      try {
        const response = await fetch(String(process.env.REACT_APP_BASE_URL));
        const { data } = await response.json();
        setList(data.rates);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchList();
  }, []);

  return (
    <ListAppContainer>
      <SearchList>
          <p>CoinList</p>
          <p>Search A Coin</p>
      </SearchList>
      <Card>
        <Search
          placeholder={"enter coin to search"}
          onChange={({ target }) => setSearchValue(target.value)}
        />
        <ListContent>
          {loading && <Skeleton height={50} count={8} />}
          {!loading && error ? <p>{error.message}</p> : null}
          {!loading && !error
            ? coins.map(([key, value]) => <Coin key={value.key} cryptoCoin={key} rate={value.rate} />)
            : null}
        </ListContent>
      </Card>
    </ListAppContainer>
  );
};

export default ListApp;
