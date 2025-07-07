import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import data from "../../../../data.json";
import { CircleAlert, EuroIcon, TagIcon } from "lucide-react";
import DetailsBadge from "@/app/experience/[slug]/components/DetailsBadge";
import ExperienceDescription from "@/app/experience/[slug]/components/ExperienceDescription";
import BackNavigation from "@/components/BackNavigation";
import type { ExperienceType } from "@/types/Type";

const ExperiencePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  // Await params before using
  const { slug } = await params;

  // Find the experience by slug
  const experience = data.find((exp: ExperienceType) => exp.slug === slug);

  // If experience not found, return 404
  if (!experience) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-6">
        <BackNavigation goto="experiences" content="Back to Experiences" />
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-80 md:h-[420px] overflow-hidden">
            <Image
              src={experience.image}
              alt={experience.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>

            <DetailsBadge content={experience.category} />
            <DetailsBadge content={experience.price} />
          </div>

          <div className="p-8 md:p-12">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {experience.title}
            </h1>

            {/* Host Information */}
            <div className="flex items-center mb-8 bg-gray-50/50 rounded-2xl">
              <Image
                src={experience.host.avatar}
                alt={experience.host.name}
                width={100}
                height={100}
                className="size-14 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-sm text-gray-600">Hosted by</p>
                <p className="text-xl font-semibold text-gray-900">
                  {experience.host.name}
                </p>
              </div>
            </div>

            <ExperienceDescription
              title="Overview"
              content={experience.description}
            />
            <ExperienceDescription
              title="What You'll Experience"
              content={experience.long_description}
            />

            {/* Experience Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Experience Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <TagIcon className="size-6 text-indigo-500 mr-3" />
                    <span className="text-gray-700">
                      Category: {experience.category}
                    </span>
                  </div>

                  <div className="flex items-center">
                    <EuroIcon className="size-6 text-indigo-500 mr-3" />
                    <span className="text-gray-700">
                      Price: {experience.price}€
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/booking/${experience.slug}`}
                className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-4 px-8 rounded-xl text-center transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book Now
                {experience.price && (
                  <span className="ml-2">- ${experience.price}</span>
                )}
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-indigo-50/50 rounded-2xl">
              <div className="flex items-start">
                <CircleAlert className="size-6 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Important Information
                  </h4>
                  <p className="text-sm text-gray-700">
                    Please arrive 15 minutes before the scheduled start time.
                    Cancellations made 24 hours in advance are fully refundable.
                    Weather conditions may affect the experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
