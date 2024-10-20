'use client'

export function Card(props) {

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer"
      className="border-2 border-neutral-800 px-5 py-4 bg-white rounded-xl text-neutral-800"
    >
      <h2>{props.title}</h2>
      <p>{props.user}</p>
    </a>
  );
}
