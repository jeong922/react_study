import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  return (
    <>
      <nav className='flex items-center justify-center'>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          <IoIosArrowBack />
        </button>
        {Array.from({ length: numPages }, (_, i) => i).map((_, i) => (
          <button
            className={`${
              page === i + 1 && 'text-rose-400 font-semibold'
            } px-2`}
            key={i + 1}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          <IoIosArrowForward />
        </button>
      </nav>
    </>
  );
}
