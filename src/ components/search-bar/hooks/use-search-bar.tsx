import { ChangeEvent, useState } from "react";

export const useSearchBar = ({
  handleOnTripSearch,
}: {
  handleOnTripSearch: (search: string) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    handleOnTripSearch(searchQuery);
  };

  return {
    handleSearchChange,
    handleSearchClick,
    searchQuery,
  };
};
