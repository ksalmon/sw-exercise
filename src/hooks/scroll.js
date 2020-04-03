import { useState, useEffect } from "react";

// Custom Hook for Scroll Event
export default function useInfiniteScroll(callback) {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isScrolling);

    return () => window.removeEventListener("scroll", isScrolling);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isFetching) return;

    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  function isScrolling() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};
