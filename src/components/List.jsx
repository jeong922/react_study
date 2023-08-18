import React, { useEffect, useRef } from 'react';
import { getMovies } from '../api/api';
import { useInfiniteQuery } from 'react-query';
import PosterImage from './PosterImage';

export default function List() {
  const pageEnd = useRef();
  const { data, fetchNextPage } = useInfiniteQuery('projects', getMovies, {
    getNextPageParam: (lastPage, pages) => {
      if (pages.length < 5) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

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
    <div>
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
      <div ref={pageEnd}></div>
    </div>
  );
}
