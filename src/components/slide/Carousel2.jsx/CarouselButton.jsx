import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export default function CarouselButton({ direction, onClick, padding }) {
  return (
    <button
      onClick={onClick}
      className={`${
        direction === 'right' ? 'right-0' : 'left-0'
      } absolute h-full z-50 cursor-pointer`}
    >
      {direction === 'left' ? (
        <MdKeyboardArrowLeft className='text-2xl text-white rounded-full w-9 h-9 bg-neutral-500/70' />
      ) : (
        <MdKeyboardArrowRight className='text-2xl text-white rounded-full w-9 h-9 bg-neutral-500/70' />
      )}
    </button>
  );
}
