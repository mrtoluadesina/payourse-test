import { ISearch } from "../../typings";
import { SearchWrapper } from "./style";

const Search = ({ onChange, placeholder }: ISearch) => {
  return (
    <SearchWrapper>
      <input placeholder={placeholder} onChange={onChange} />
    </SearchWrapper>
  );
};

export default Search;
