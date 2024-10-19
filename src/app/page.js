'use client'
import { Card } from "@/components/Card";
import { Links } from "@/constants/data";

export default function Home() {

  return (
    <div className="min-h-screen grid lg:grid-cols-2 grid-cols-1 gap-2 p-2">
      {/* Hero Section */}
      <div className="border p-8 flex flex-col justify-between">
        <div>Top</div>
        <div className="space-y-6">
          <h1>Linktree</h1>
          <div className="border-y py-6">
            Middle Content
          </div>
        </div>
        <div>Bottom</div>
      </div>
      {/* Links Section */}
      <div className="border p-8 space-y-8">
        <div className="space-y-2">
          <h3>Professions</h3>
          <div className="grid grid-cols-3 gap-5">
            {Links.profession.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                user={card.user}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3>Live Sites</h3>
          <div className="grid grid-cols-3 gap-5">
            {Links.sites.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                user={card.user}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
