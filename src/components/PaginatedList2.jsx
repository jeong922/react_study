import React, { useEffect, useState } from 'react';
import { getTv } from '../api/api';
import { imageUrl } from '../util/util';

// 이렇게 해도 되는건가...?

export default function PaginatedList2() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    if (page <= 5) {
      getTv(page).then((res) => {
        const result = res.results;
        setData([...result]);
      });
    }
    setLoading(false);
  }, [page]);

  return (
    <div>
      {loading && <div className='p-4 bg-rose-50'>loading</div>}
      <ul className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
        {data?.map((tv, index) => (
          <li key={tv.id} className='text-center'>
            <img
              src={`${imageUrl + (tv.poster_path || tv.backdrop_path)}`}
              alt={tv.name}
            />
            <span className='text-lg font-semibold'>{tv.name}</span>
          </li>
        ))}
      </ul>
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
            setPage((old) => old + 1);
          }}
          disabled={page >= 5}
        >
          ➡
        </button>
      </div>
    </div>
  );
}
