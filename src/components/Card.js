'use client'

export function Card(props) {

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer"
      className="border border-neutral-800 px-5 py-4 rounded-xl text-neutral-400 transition duration-300 ease-in-out hover:bg-indigo-500/20 hover:border-indigo-500/70 hover:text-white"
    >
      <h2>{props.title}</h2>
      <p>{props.user}</p>
    </a>
  );
}
