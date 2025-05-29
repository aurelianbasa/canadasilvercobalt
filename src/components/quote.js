import * as React from 'react';
import { RiDoubleQuotesR } from 'react-icons/ri';

export default function Quote({ quote = '', author = '', position = '' }) {
  return (
    <div className='grid gap-6 rounded-2xl bg-tertiary p-5 md:p-10'>
      <p className='text-white'>{quote}</p>

      <div className='flex'>
        <div className='flex-1'>
          <p className='mb-2 text-3xl text-white'>{author}</p>
          <p className='text-white'>{position}</p>
        </div>

        <div className='flex size-20 items-center justify-center rounded-full bg-secondary'>
          <RiDoubleQuotesR className='size-10 text-white' />
        </div>
      </div>
    </div>
  );
}
