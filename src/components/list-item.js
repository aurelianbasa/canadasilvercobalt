import * as React from 'react';

export default function ListItem({ number = '1', title = '', description = '' }) {
  return (
    <div className='flex gap-6'>
      <span className='flex size-[46px] items-center justify-center rounded-full bg-gray text-2xl text-white'>
        {number}
      </span>

      <div className='mt-1 flex flex-1 flex-col gap-2'>
        <span className='text-2xl text-secondary'>{title}</span>
        <span className='text-tertiary'>{description}</span>
      </div>
    </div>
  );
}
