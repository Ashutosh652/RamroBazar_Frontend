import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../axios";
import SearchContext from "../../Components/NavBar/SearchContext";

export default function useLoadMore(pageNumber) {
  const { query } = useParams();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [nextUrl, setNextUrl] = useState(`items/?offset=0&search=${query}`);
  const { setSearchData } = useContext(SearchContext);

  useEffect(() => {
    setLoading(true);
    axiosInstance.get(nextUrl).then((response) => {
      setSearchData(response.data);
      if (response.data.next) {
        setNextUrl(
          response.data.next.replace(/^(http:\/\/localhost:8000\/api\/)/, "")
        );
      } else {
        setNextUrl(null);
      }
      setItems((prevItems) => {
        let narr = [...prevItems, ...response.data.results];
        return Array.from(new Set(narr.map((a) => a.id))).map((id) => {
          return narr.find((a) => a.id === id);
        });
      });
      setHasMore(response.data.next !== null);
      setLoading(false);
    });
  }, [pageNumber]);

  return { loading, items, hasMore };
}
