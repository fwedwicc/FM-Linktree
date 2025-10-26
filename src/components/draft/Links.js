'use client'
import { Card } from "@/components/ui/draft"
import { linksData } from "@/constants/data"
import { useTextAnimation } from "@/hooks"

export function Links() {

  const heading1Ref = useTextAnimation({ delay: 0.2, stagger: 0.08 })
  const heading2Ref = useTextAnimation({ delay: 0.3, stagger: 0.08 })
  const heading3Ref = useTextAnimation({ delay: 0.4, stagger: 0.08 })

  const headingRefs = [heading1Ref, heading2Ref, heading3Ref]

  return (
    <section className="md:p-8 p-5 md:space-y-8 space-y-6 md:h-screen h-auto overflow-auto custom-scrollbar">
      {[
        { title: "Professions / Socials", data: linksData.profession },
        { title: "Live Sites", data: linksData.sites },
        { title: "Other Profiles", data: linksData.courses },
      ].map((links, index) => (
        <div className="space-y-2" key={index}>
          <h3 ref={headingRefs[index]} className="overflow-hidden">{links.title}</h3>
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
