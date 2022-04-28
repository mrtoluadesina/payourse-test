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
          <p>Search Coin</p>
      </SearchList>
      <Card>
        <Search
          placeholder={"search for a coin"}
          onChange={({ target }) => setSearchValue(target.value)}
        />
        <ListContent>
          <Coin />
          {loading && <Skeleton width={100} count={5} />}
          {!loading && error ? <p>{error.message}</p> : null}
          {!loading && !error
            ? coins.map(([key, value]) => <p key={value.key}>{key}</p>)
            : null}
        </ListContent>
      </Card>
    </ListAppContainer>
  );
};

export default ListApp;
