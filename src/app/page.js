'use client'
import { useState } from "react";
import { Card } from "@/components/Card";
import { Links } from "@/constants/data";

export default function Home() {
  const [heading, setHeading] = useState('Welcome nowhere!');

  const handleCardHover = (newHeading) => {
    setHeading(newHeading); // Update the heading based on hover state
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>{heading}</h1>
      <h4>Professions</h4>
      {Links.profession.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          user={card.user}
          onHover={handleCardHover}
        />
      ))}
      <h4>Live Sites</h4>
      {Links.sites.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          user={card.user}
          onHover={handleCardHover}
        />
      ))}
    </div>
  );
}
