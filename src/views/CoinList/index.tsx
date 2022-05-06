import { useEffect, useMemo, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Card, Coin, Search } from '../../components';
import Button from '../../components/Button';
import { IRateList, ISearch } from '../../typings';
import { ListAppContainer, ListContent, SearchList } from './style';

const CoinList = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<IRateList>({} as IRateList);
  const [error, setError] = useState<Error | null>(null);
  const [searchValue, setSearchValue] = useState('');

  const coins = useMemo(
    () =>
      Object.entries(list).filter(([key]) =>
        key.toLowerCase().includes(searchValue.toLocaleLowerCase())
      ),
    [list, searchValue]
  );

  const fetchList = async () => {
    try {
      setLoading(true);
      const response = await fetch(String(process.env.REACT_APP_BASE_URL));
      const { data } = await response.json();
      setList(data.rates);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleChange: ISearch['onChange'] = ({ target }) =>
    setSearchValue(target.value);

  return (
    <ListAppContainer>
      <SearchList>
        <p>CoinList</p>
        <p>Search A Coin</p>
      </SearchList>
      <Card>
        <Search placeholder={'enter coin to search'} onChange={handleChange} />
        <ListContent>
          {loading && <Skeleton height={50} count={8} />}
          {!loading && error ? (
            <div>
              <p>{error.message}</p>
              <Button onClick={fetchList}>Refresh</Button>
            </div>
          ) : null}
          {!loading && !error
            ? coins.map(([key, value]) => (
                <Coin key={value.key} cryptoCoin={key} rate={value.rate} />
              ))
            : null}
        </ListContent>
      </Card>
    </ListAppContainer>
  );
};

export default CoinList;
