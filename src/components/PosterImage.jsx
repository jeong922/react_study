import React, { useEffect, useRef } from 'react';
import { imageUrl } from '../util/util';

export default function PosterImage({ movie }) {
  const imgRef = useRef(null);
  useEffect(() => {
    const options = {};
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <img
        ref={imgRef}
        data-src={`${imageUrl + movie.poster_path}`}
        alt={movie.title}
      />
      <span className='text-lg font-semibold'>{movie.title}</span>
    </div>
  );
}
