"use client";

import ExperienceCard from "@/components/ExperienceCard";
import type { ExperienceType } from "@/types/Type";


interface Props {
  experiences: ExperienceType[];
}

export default function ExperiencesGrid({ experiences }: Props) {
  if (experiences.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          No experiences found
        </h3>
        <p className="text-gray-500 mb-4">
          Try adjusting your search terms or category filters
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
      {experiences.map((exp) => (
        <ExperienceCard key={exp.id} exp={exp} />
      ))}
    </div>
  );
}