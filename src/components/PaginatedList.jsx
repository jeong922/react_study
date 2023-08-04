import React, { useState } from 'react';
import { getTv } from '../api/api';
import { useQuery } from 'react-query';

const imageUrl = 'https://image.tmdb.org/t/p/w500';

export default function PaginatedList() {
  const [page, setPage] = useState(1);
  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(['projects', page], () => getTv(page), {
      keepPreviousData: true,
    });

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          <ul className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
            {data?.results.map((tv, index) => (
              <li key={tv.id} className='text-center'>
                <img
                  src={`${imageUrl + (tv.poster_path || tv.backdrop_path)}`}
                  alt={tv.name}
                />
                <span className='text-lg font-semibold'>{tv.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className='w-full p-2 text-center'>
        <button
          className={`${page <= 1 && 'opacity-0'}`}
          onClick={() => setPage((old) => old - 1)}
          disabled={page === 1}
        >
          ⬅
        </button>

        <span className='px-3'>{page}</span>

        <button
          className={`${page >= 5 && 'opacity-0'}`}
          onClick={() => {
            if (!isPreviousData) {
              setPage((old) => old + 1);
            }
          }}
          disabled={isPreviousData || page >= 5}
        >
          ➡
        </button>
      </div>
      {isFetching ? <span> Loading...</span> : null}
    </div>
  );
}
