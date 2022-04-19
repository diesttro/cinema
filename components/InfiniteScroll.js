import { useEffect, useRef, useState } from 'react';
import { debounce } from 'utils';

const InfiniteScroll = ({ onReachEnd, loadingStatus, children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const loading = useRef(false);

  const loadMore = debounce(async () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.offsetHeight) {
      if (loading.current) return;

      setIsLoading(true);
      loading.current = true;

      await Promise.resolve(onReachEnd());

      setIsLoading(false);
      loading.current = false;
    }
  }, 250);

  useEffect(() => {
    document.addEventListener('scroll', loadMore);

    return () => {
      document.removeEventListener('scroll', loadMore);
    };
  }, [onReachEnd]);

  return (
    <>
      {children}
      {isLoading ? loadingStatus : null}
    </>
  );
};

export default InfiniteScroll;
