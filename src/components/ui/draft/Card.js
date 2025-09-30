'use client'
import Image from 'next/image';

export function Card(props) {

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer"
      className={`${props.styles} relative group flex items-center md:gap-4 gap-2.5 p-3 rounded-[19px] bg-[#F9F9F9] hover:bg-white text-neutral-700 transition-all duration-300 ease-in-out`}
    >
      {/* <div className='size-2 rounded-full bg-neutral-200 top-0 right-0 opacity-0 group-hover:opacity-100 absolute transition duration-300 ease-in-out'></div> */}
      <Image
        className="md:size-12 size-9 rounded-[16px]"
        src={props.logo}
        alt={props.title}
      />
      <div className='space-y-1.5'>
        <p className='leading-none truncate w-full md:max-w-full max-w-[4.9rem] text-neutral-900'>{props.title}</p>
        <p className='flex items-center gap-1 leading-none text-neutral-500 text-xs'>
          <span className={`md:size-1.5 size-1 rounded-full 
          ${props.status === 'Finished' || props.status === 'Active' || props.status === 'On going' ? 'bg-green-500' : props.status === 'In progress' ? 'bg-blue-500' : 'bg-amber-500'}`}></span>
          {props.status}
        </p>
      </div>
    </a>
  );
}
