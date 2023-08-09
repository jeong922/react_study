import React, { useState } from 'react';
import { useQueries } from 'react-query';
import { getMovie2 } from '../api/api';
import Pagination from './Pagination';

const imageUrl = 'https://image.tmdb.org/t/p/w500';

export default function PaginatedList3() {
  const results = useQueries([
    { queryKey: ['tv', 1], queryFn: () => getMovie2(1) },
    { queryKey: ['tv', 2], queryFn: () => getMovie2(2) },
    { queryKey: ['tv', 3], queryFn: () => getMovie2(3) },
    { queryKey: ['tv', 4], queryFn: () => getMovie2(4) },
    { queryKey: ['tv', 5], queryFn: () => getMovie2(5) },
  ]);

  // 쓰읍... 이게 맞나
  const loading = results.some((result) => result.isLoading);
  const data = results.flatMap((v) => v.data);
  const limit = 20;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <div>
      <h2 className='text-lg'>페이지 : {page}</h2>
      {!loading && (
        <ul className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
          {data.slice(offset, offset + limit).map((tv) => (
            <li key={tv.id} className='text-center'>
              <img
                src={`${imageUrl + (tv.poster_path || tv.backdrop_path)}`}
                alt={tv.title}
              />
              <span className='text-lg font-semibold'>{tv.title}</span>
            </li>
          ))}
        </ul>
      )}
      <Pagination
        total={data.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
