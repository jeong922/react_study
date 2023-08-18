import React, { useEffect, useRef, useState } from 'react';
import { getTv } from '../api/api';
import { imageUrl } from '../util/util';

export default function List2() {
  const pageEnd = useRef();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );
    observer.observe(pageEnd.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setLoading(true);
    if (page && page <= 5) {
      getTv(page).then((res) => {
        const result = res.results;
        setData((prev) => [...prev, ...result]);
      });
    }
    setLoading(false);
  }, [page]);

  console.log(page);

  return (
    <div>
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
      <div ref={pageEnd}></div>
      {loading && <div className='p-4 bg-rose-50'>loading</div>}
    </div>
  );
}
