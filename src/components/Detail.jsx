import React from 'react';
import { imageUrl } from '../util/util';
import { AiFillStar } from 'react-icons/ai';

export default function Detail({ data, onClose }) {
  return (
    <>
      {data && (
        <section className='relative w-full max-w-4xl pb-4 mx-auto mt-20 mb-4 overflow-hidden text-white bg-gray-900 rounded-lg shadow-2xl'>
          <button
            className='absolute top-0 right-0 z-20 p-5 text-white '
            onClick={onClose}
          >
            ✖
          </button>
          <div className='relative w-full'>
            <img
              className='object-cover w-full aspect-video'
              src={imageUrl(data.backdrop_path, 'w500')}
              alt={data.original_title}
            />
            <div className='absolute top-0 w-full bg-gradient-to-t from-gray-900 aspect-video'></div>
          </div>
          <div className='p-4'>
            <h2 className='text-3xl'>{data.title || data.original_title}</h2>
            <p>{data.release_date}</p>
            {data.vote_average && (
              <div className='flex items-center'>
                <AiFillStar className='mr-2 text-yellow-500' />
                <span>{data.vote_average}</span>
              </div>
            )}
            <p>{data?.overview}</p>
          </div>
        </section>
      )}
    </>
  );
}
