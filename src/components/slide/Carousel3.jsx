import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getMovie2 } from '../../api/api';
import BgImage from '../BgImage';
import CarouselButton from './Carousel2.jsx/CarouselButton';

export default function Carousel3() {
  const { data } = useQuery(['movie'], () => getMovie2(1));
  const ITEM_LENGTH = 20;
  const [slideIndex, setSlideIndex] = useState(0);
  const [itemPerScreen, setItemPerScreen] = useState(6);
  const itemCount = Math.ceil(ITEM_LENGTH / itemPerScreen);

  const slideHandler = (derection) => {
    if (slideIndex + derection < 0) {
      return;
    }

    if (slideIndex + derection >= itemCount) {
      return;
    }

    setSlideIndex(slideIndex + derection);
  };

  const checkWindowSize = useCallback(() => {
    if (window.innerWidth > 1440) {
      setItemPerScreen(6);
      if (slideIndex !== 0 && slideIndex >= 1) {
        setSlideIndex(itemCount - 1);
      }
      return;
    }

    if (window.innerWidth > 768) {
      setItemPerScreen(4);
      if (slideIndex !== 0 && slideIndex >= 3) {
        setSlideIndex(itemCount - 1);
      }
      return;
    }

    if (window.innerWidth > 0) {
      setItemPerScreen(2);
      if (slideIndex !== 0 && slideIndex >= 6) {
        setSlideIndex(itemCount - 1);
      }
      return;
    }
    console.log(slideIndex);
  }, [itemCount, slideIndex]);

  useEffect(() => {
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, [checkWindowSize]);

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, []);

  return (
    <>
      {data && (
        <div className='overflow-hidden '>
          <div className='relative flex justify-between'>
            <CarouselButton direction='left' onClick={() => slideHandler(-1)} />
            <CarouselButton direction='right' onClick={() => slideHandler(1)} />

            <div
              className='flex transition-all duration-500 ease-in-out'
              style={{
                transform: `translateX(${
                  (-100 / ITEM_LENGTH) * itemPerScreen * slideIndex
                }%)`,
              }}
            >
              {data.map((item, index) => (
                <div
                  className='relative px-1 '
                  key={index}
                  style={{
                    width: `${100 / itemPerScreen}vw`,
                  }}
                >
                  <BgImage movie={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
