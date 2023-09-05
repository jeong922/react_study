import { useQuery } from 'react-query';
import { getMovie2 } from '../../api/api';
import { useState } from 'react';
import CarouselButton from './CarouselButton';
import BgImage from '../BgImage';

// 수정필요..!!

export default function Carousel() {
  const { data } = useQuery(['movie'], () => getMovie2(1));
  const ITEM_LENGTH = data?.length;
  const slidePadding = 32;
  const [slideIndex, setSlideIndex] = useState(0);
  const [itemPerScreen, setItemPerScreen] = useState(6);
  const itemCount = Math.ceil(ITEM_LENGTH / itemPerScreen);
  console.log(itemCount);
  console.log(100 / itemPerScreen);

  const slideHandler = (derection) => {
    if (slideIndex + derection < 0) {
      return;
    }
    if (slideIndex + derection >= itemCount - 1) {
      return;
    }

    setSlideIndex(slideIndex + derection);
  };

  return (
    <div>
      <h2>슬라이드</h2>
      {data && (
        <div className='relative'>
          <CarouselButton
            direction='left'
            onClick={() => slideHandler(-1)}
            padding={slidePadding}
          />
          <CarouselButton
            direction='right'
            onClick={() => slideHandler(1)}
            padding={slidePadding}
          />
          <div className='relative overflow-hidden'>
            <div
              className={`relative flex left-[5%]`}
              style={{
                width: `${100 * itemCount}vw`,
                transition: 'all 300ms ease-in-out',
                transform: `translateX(${
                  (-100 / ITEM_LENGTH) * itemPerScreen * slideIndex
                }%)`,
              }}
            >
              {data.map((item) => (
                <div
                  key={item.id}
                  className={`bg-rose-100 px-1`}
                  style={{
                    width: `${90 / itemPerScreen}vw`,
                  }}
                >
                  <BgImage movie={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
