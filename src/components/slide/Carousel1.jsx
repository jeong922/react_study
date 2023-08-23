// 라이브러리 사용
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useQuery } from 'react-query';
import { getMovie2 } from '../../api/api';
import PosterImage from '../PosterImage';

const responsive = {
  desktop: {
    breakpoint: { max: 1920, min: 1024 },
    items: 5,
    slidesToSlide: 5,
  },

  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 3,
    slidesToSlide: 3,
  },

  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};

export default function Carousel1() {
  const { data } = useQuery(['movie'], () => getMovie2(1));
  return (
    <div className='w-full'>
      {data && (
        <Carousel responsive={responsive} containerClass='flex w-full gap-2'>
          {data.map((item) => (
            <div key={item.id} className='px-2'>
              <PosterImage movie={item} />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}
