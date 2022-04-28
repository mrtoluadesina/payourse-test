import { ISearch } from "../../typings";
import { SearchWrapper } from "./style";

const Search = ({ onChange }: ISearch) => {
  return (
    <SearchWrapper>
      <input onChange={onChange} />
    </SearchWrapper>
  );
};

export default Search;
