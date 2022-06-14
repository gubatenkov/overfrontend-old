import { SearchIcon } from 'components';

const Search = () => (
  <div className="search relative flex">
    <SearchIcon className="absolute top-[50%] left-3 h-4 w-4 translate-y-[-50%]" />
    <input
      className="search-input rounded-lg bg-light py-[6px] pl-[2.5rem] pr-[1rem] text-base"
      type="text"
      placeholder="Search"
    />
  </div>
);

export default Search;
