'use client'
import Image from 'next/image';

export function Card(props) {

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer"
      className={`${props.styles} group flex items-start gap-2 border border-neutral-800 md:p-3 p-2 rounded-2xl text-neutral-400 transition duration-300 ease-in-out hover:text-white`}
    >
      <Image
        className="size-12 md:grayscale md:opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300 ease-in-out"
        src={props.logo}
        alt={props.title}
      />
      <div>
        <p className=''>{props.title}</p>
      </div>
    </a>
  );
}
