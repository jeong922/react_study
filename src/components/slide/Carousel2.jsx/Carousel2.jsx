import { useCallback, useEffect, useState } from 'react';
import CarouselButton from './CarouselButton';
import { useQuery } from 'react-query';
import { getMovie2 } from '../../../api/api';
import BgImage from '../../BgImage';

export default function Carousel() {
  const { data } = useQuery(['movie'], () => getMovie2(1));
  const ITEM_LENGTH = data?.length;
  const slidePadding = 32;
  const [slideIndex, setSlideIndex] = useState(0);
  const [itemPerScreen, setItemPerScreen] = useState(5);
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

  return (
    <div>
      <h2>슬라이드</h2>
      {data && (
        <div className='relative w-full'>
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
                transition: 'all 300ms ease-in-out',
                // 여기 값 계산...
                // transform: `translateX(${-100 * slideIndex}%)`,
                // transform: `translateX(${
                //   -1 *
                //   ((100 / ITEM_LENGTH) * 0.25 +
                //     (100 / itemPerScreen) * slideIndex)
                // }%)`,
                transform: `translateX(${
                  -1 * ((100 / ITEM_LENGTH) * 0.5 + 100 * slideIndex)
                }%)`,
              }}
            >
              {data.map((item) => (
                <div
                  key={item.id}
                  className={`bg-rose-100 h-[10vw] mx-2 aspect-video`}
                  style={{ width: `100% / ${itemPerScreen})}` }}
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
