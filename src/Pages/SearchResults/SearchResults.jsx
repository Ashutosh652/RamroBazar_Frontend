import React, { useEffect, useContext } from "react";
import SearchContext from "../../Components/NavBar/SearchContext";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../axios";

const SearchResults = () => {
  const { query } = useParams();
  const { searchData, setSearchData } = useContext(SearchContext);

  useEffect(() => {
    axiosInstance.get(`items/?search=${query}`).then((response) => {
      setSearchData(response.data);
    });
  }, [query, setSearchData]);

  return (
    <div>
      {searchData ? (
        searchData.results.map((item, index) => {
          return <div key={index}>{item.name}</div>;
        })
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default SearchResults;
