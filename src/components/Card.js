'use client'
import Image from 'next/image';

export function Card(props) {

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer"
      className={`${props.styles} relative group flex items-center md:gap-4 gap-2.5 border border-neutral-800 p-3 rounded-2xl hover:rounded-tr-[2.6rem] text-neutral-400 transition-all duration-300 ease-in-out hover:text-white`}
    >
      <div className='size-2 rounded-full bg-neutral-200 top-0 right-0 opacity-0 group-hover:opacity-100 absolute transition duration-300 ease-in-out'></div>
      <Image
        className="md:size-12 size-9 md:border md:border-neutral-700 rounded-full"
        src={props.logo}
        alt={props.title}
      />
      <div>
        <p className='leading-none truncate w-full md:max-w-full max-w-[4.9rem]'>{props.title}</p>
      </div>
    </a>
  );
}
