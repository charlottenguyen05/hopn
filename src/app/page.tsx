// A homepage (/) featuring a hero section and a grid of
// six featured experiences. Each experience card should
// display an image, title, and brief description. Clicking
// a button should navigate the user to the experiences
// listing page.

import data from "../../data.json";
import ExperienceCard from "@/components/ExperienceCard";
import Hero from "@/components/Hero";

export default function HomePage() {
  const featured = data.slice(0, 6);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Hero/>

      {/* Featured Experiences */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h3 className="text-2xl font-bold mb-8 text-center">
          Featured this week
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </section>
    </div>
  );
}
