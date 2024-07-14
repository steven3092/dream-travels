import { Input } from "../input/input";
import "./search-bar.scss";
import { useSearchBar } from "./hooks/use-search-bar";

export const SearchBar = ({
  handleOnTripSearch,
}: {
  handleOnTripSearch: (search: string) => void;
}) => {
  const { searchQuery, handleSearchChange, handleSearchClick } = useSearchBar({
    handleOnTripSearch,
  });

  return (
    <div className="search-bar">
      <h1 className="search-bar-title">The place of your dream of</h1>
      <h3 className="search-bar-sub-title">Let's live new adventures</h3>
      <div className="search-bar-sub-components">
        <Input
          type="text"
          placeholder="Search trips"
          value={searchQuery}
          onChange={handleSearchChange}
          name="search-trips"
        />
        <button
          type="button"
          name="Search"
          className="search-bar-button"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};
