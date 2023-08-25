import React, { useEffect, useRef, useState } from 'react';
import { imageUrl } from '../util/util';
import ModalPortal from './ModalPortal';
import Modal from './Modal';
import Detail from './Detail';

export default function BgImage({ movie }) {
  const [showModal, setShowModal] = useState(false);
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

  const onClose = () => setShowModal(false);

  return (
    <>
      <div onClick={() => setShowModal(true)} className='w-full h-full'>
        <img
          className='object-cover w-full h-full bg-neutral-400'
          ref={imgRef}
          data-src={`${imageUrl(movie.backdrop_path, 'w500')}`}
          alt={movie.title}
        />
      </div>
      {showModal && (
        <ModalPortal>
          <Modal showModal={showModal} onClose={onClose}>
            <Detail data={movie} onClose={onClose} />
          </Modal>
        </ModalPortal>
      )}
    </>
  );
}
