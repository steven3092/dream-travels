import { ChangeEvent, useState } from "react";
import { Button } from "../button/button";
import { Input } from "../input/input";
import "./search-bar.scss";

export const SearchBar = ({
  handleOnTripSearch,
}: {
  handleOnTripSearch: (search: string) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    handleOnTripSearch(searchQuery);
  };
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
