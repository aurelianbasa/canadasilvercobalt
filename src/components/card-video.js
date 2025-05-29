import * as React from 'react';
import { motion } from 'framer-motion';

import Play from '@media/common/play.webp';
import DefaultPoster from '@media/common/default-poster.webp';

export default function CardVideo({ date = '', title = '', subtitle = '', src = '', poster = '' }) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const service = React.useMemo(() => {
    if (src.includes('youtube.com')) {
      return 'youtube';
    }

    if (src.includes('commodity-tv.com')) {
      return 'commodity';
    }
  }, [src]);

  const videoId = React.useMemo(() => {
    if (service === 'youtube') {
      const match = src.match(/\/embed\/([a-zA-Z0-9_-]+)/);
      return match?.[1] || '';
    }

    if (service === 'commodity') {
      const match = src.match(/v=([0-9]+)/);
      return match?.[1] || '';
    }

    return '';
  }, [src, service]);

  const fallbackThumbnail =
    service === 'youtube' ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : DefaultPoster;
  const iframeSrc = service === 'youtube' ? `${src}&autoplay=1` : `${src}?autoplay=1`;
  const thumbnail = poster || fallbackThumbnail;

  return (
    <div className='flex flex-col overflow-hidden rounded-lg'>
      <div className='relative h-60 w-full md:h-96'>
        {isPlaying ? (
          <motion.div
            className='size-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <iframe
              className='size-full'
              title={title}
              src={iframeSrc}
              allow='autoplay; encrypted-media'
              frameborder='0'
              allowFullScreen
            ></iframe>
          </motion.div>
        ) : (
          <button onClick={() => setIsPlaying(true)} className='group relative size-full'>
            <img src={thumbnail} alt={`Thumbnail for ${title}`} className='size-full scale-[103%] object-cover' />
            <div className='absolute inset-0 flex items-center justify-center bg-brown/10 transition-colors group-hover:bg-black/0'>
              <img
                src={Play}
                alt='Play button'
                className='h-24 w-36 cursor-pointer transition-transform group-hover:scale-110'
              />
            </div>
          </button>
        )}
      </div>

      <div className='flex grow flex-col gap-4 bg-white px-8 py-10'>
        <p className='text-tertiary'>{date}</p>
        <h2 className='text-2xl'>{title}</h2>
        <p className='font-semibold text-tertiary'>{subtitle}</p>
      </div>
    </div>
  );
}
