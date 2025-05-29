import * as React from 'react';
import { RiCheckFill } from 'react-icons/ri';

export default function CardCheck({ title = '', subtitle = '', description = '' }) {
  return (
    <div className='min-h-[410px] rounded-[4px] bg-beige p-6'>
      <span className='mb-4 flex size-[46px] min-w-[46px] items-center justify-center rounded-full bg-white'>
        <RiCheckFill className='size-5 text-tertiary' />
      </span>

      <h4 className='mb-3 text-3xl text-secondary'>{title}</h4>
      <p className='mb-4 text-gray'>{subtitle}</p>
      <p>{description}</p>
    </div>
  );
}
