'use client'
import { Card } from "@/components/ui/draft"
import { linksData } from "@/constants/data"

export function Links() {

  return (
    <section className="md:p-8 p-5 md:space-y-8 space-y-6 md:h-screen h-auto overflow-auto custom-scrollbar">
      {[
        { title: "Professions / Socials", data: linksData.profession },
        { title: "Live Sites", data: linksData.sites },
        { title: "Other Profiles", data: linksData.courses },
      ].map((links, index) => (
        <div className="space-y-2" key={index}>
          <h3>{links.title}</h3>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
            {links.data.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                status={card.status}
                link={card.link}
                logo={card.logo}
                styles={card.styles}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
