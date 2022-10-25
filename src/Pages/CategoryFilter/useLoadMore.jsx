import { useEffect, useState } from "react";
import { axiosInstance } from "../../axios";

export default function useLoadMore(pageNumber, slug) {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [nextUrl, setNextUrl] = useState(`items/?category__slug=${slug}`);

  useEffect(() => {
    setLoading(true);
    setNextUrl(`items/?category__slug=${slug}`);
    axiosInstance.get(`items/?category__slug=${slug}`).then((response) => {
      if (response.data.next) {
        setNextUrl(
          response.data.next.replace(/^(http:\/\/localhost:8000\/api\/)/, "")
        );
      } else {
        setNextUrl(null);
      }
      setItems([...response.data.results]);
      setHasMore(response.data.next !== null);
      setLoading(false);
    });
  }, [slug]);

  useEffect(() => {
    setLoading(true);
    axiosInstance.get(nextUrl).then((response) => {
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
