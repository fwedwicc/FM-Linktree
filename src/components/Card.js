'use client'
import Image from 'next/image';

export function Card(props) {

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer"
      className={`${props.styles} relative group flex items-center md:gap-4 gap-3 border border-neutral-800 md:p-3 p-2 rounded-2xl hover:rounded-tr-[2.6rem] text-neutral-400 transition-all duration-300 ease-in-out hover:text-white`}
    >
      <div className='size-2 rounded-full bg-neutral-200 top-0 right-0 opacity-0 group-hover:opacity-100 absolute transition duration-300 ease-in-out'></div>
      <Image
        className="md:size-12 size-10 md:border md:border-neutral-700 rounded-full"
        src={props.logo}
        alt={props.title}
      />
      <div>
        <p className='leading-none'>{props.title}</p>
      </div>
    </a>
  );
}
