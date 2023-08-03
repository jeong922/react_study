import React from 'react';
import { getMovies } from '../api/api';
import { useInfiniteQuery } from 'react-query';

const imageUrl = 'https://image.tmdb.org/t/p/w500';

export default function List() {
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery('projects', getMovies, {
      getNextPageParam: (lastPage, pages) => {
        if (pages.length < 5) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    });
  return (
    <div>
      <ul className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {data?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.results.map((movie) => (
              <li key={movie.id} className='text-center'>
                <img
                  src={`${imageUrl + movie.poster_path}`}
                  alt={movie.title}
                />
                <span className='text-lg font-semibold'>{movie.title}</span>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <div>
        <button
          className='w-full p-3 text-white bg-blue-950'
          onClick={fetchNextPage}
          disabled={!hasNextPage}
        >
          load more
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </div>
  );
}
