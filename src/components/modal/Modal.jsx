import { useEffect } from 'react';

export default function Modal({ showModal, onClose, children }) {
  useEffect(() => {
    if (showModal) {
      document.body.style.cssText = `
    position: fixed;
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;

      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      };
    }
  }, [showModal]);

  return (
    <section
      className='fixed top-0 left-0 z-[9999] w-full h-full overflow-y-scroll bg-black/70 '
      onClick={(e) => {
        console.log(e.target === e.currentTarget);
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {children}
    </section>
  );
}
