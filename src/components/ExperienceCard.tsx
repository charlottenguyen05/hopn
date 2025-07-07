import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ExperienceType {
  id: number;
  slug: string;
  title: string;
  description: string;
  long_description: string;
  image: string;
  category: string;
  host: { name: string; avatar: string };
}

const ExperienceCard = ({ exp }: { exp: ExperienceType }) => {
  return (
    <article className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group bg-white/5 backdrop-blur-md">
      <Link href={`/experience/${exp.slug}`}>
        <Image
          src={exp.image}
          alt={exp.title}
          width={500}
          height={200}
          className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </Link>
      <div className="p-4">
        <h4 className="font-semibold mb-1">{exp.title}</h4>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {exp.description}
        </p>
        <Link
          href={`/experience/${exp.slug}`}
          className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
        >
          View details →
        </Link>
      </div>
    </article>
  );
};

export default ExperienceCard;
