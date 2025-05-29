import * as React from 'react';
import { RiCheckFill } from 'react-icons/ri';

export default function CheckItem({ title = '', description = 'Check description' }) {
  return (
    <div className='flex items-center gap-4 rounded-[4px] bg-beigeLight px-4 py-[14px]'>
      <span className='flex size-[46px] min-w-[46px] items-center justify-center rounded-full bg-beige'>
        <RiCheckFill className='text-2xl text-tertiary' />
      </span>
      <div className='grid gap-1'>
        {title && <span className='text-2xl text-secondary'>{title}</span>}
        <span className='text-tertiary'>{description}</span>
      </div>
    </div>
  );
}
