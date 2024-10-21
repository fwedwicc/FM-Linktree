'use client'
import Image from 'next/image';

export function Card(props) {

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer"
      className={`${props.styles} group flex items-center md:gap-4 gap-3 border border-neutral-800 md:p-3 p-2 rounded-2xl text-neutral-400 transition duration-300 ease-in-out hover:text-white`}
    >
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
