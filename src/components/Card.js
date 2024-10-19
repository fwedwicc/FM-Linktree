'use client'

export function Card({ title, user }) {

  return (
    <div
      className="border p-2"
    >
      <h2>{title}</h2>
      <p>{user}</p>
    </div>
  );
}
