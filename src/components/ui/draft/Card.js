'use client'
import Image from 'next/image';

export function Card(props) {

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer"
      className={`${props.styles} relative group flex items-center md:gap-4 gap-2.5 p-2.5 rounded-[22px] border border-neutral-800/60 text-neutral-700 transition-all duration-300 ease-in-out`}
    >
      <Image
        className="md:size-11 size-8 rounded-[13px]"
        src={props.logo}
        alt={props.title}
      />
      <div className='space-y-1.5'>
        <p className='leading-none truncate w-full md:max-w-full max-w-[4.9rem] text-[13px] text-neutral-100'>{props.title}</p>
        <p className='flex items-center gap-1 leading-none text-neutral-400/80 text-[11px]'>
          <span className={`md:size-1.5 size-1 rounded-full 
          ${props.status === 'Finished' || props.status === 'Active' || props.status === 'On going' ? 'bg-green-500' : props.status === 'In progress' ? 'bg-blue-500' : 'bg-amber-500'}`}></span>
          {props.status}
        </p>
      </div>
    </a>
  );
}
