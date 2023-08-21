import React, { useEffect, useRef } from 'react';
import { getMovies } from '../api/api';
import { useInfiniteQuery } from 'react-query';
import PosterImage from './PosterImage';
import Loading from './Loading';
import ThemeButton from './ThemeButton';

export default function List() {
  const pageEnd = useRef();
  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    'projects',
    getMovies,
    {
      getNextPageParam: (lastPage, pages) => {
        if (pages.length < 5) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    }
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );
    observer.observe(pageEnd.current);
    return () => observer.disconnect();
  }, [fetchNextPage]);

  return (
    <>
      <div className='p-3'>
        <ThemeButton />
      </div>
      {status === 'loading' && (
        <div className='fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-white'>
          <Loading width={16} height={16} />
        </div>
      )}
      <ul className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
        {data?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.results.map((movie) => (
              <li key={movie.id} className='text-center'>
                <PosterImage movie={movie} />
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <div className='my-4 text-center' ref={pageEnd}>
        {isFetchingNextPage && <Loading width={9} height={9} />}
      </div>
    </>
  );
}
