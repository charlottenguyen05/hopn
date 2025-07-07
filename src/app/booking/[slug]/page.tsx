// app/booking/[slug]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import type { ExperienceType } from "@/types/Type";
import data from "../../../../data.json";

import BackNavigation from "@/components/BackNavigation";
import BookingForm from "./components/BookingForm";
import Confirmation from "./components/Confirmation";
import useBookingForm from "./hooks/useBookingForm";
import LoadingSpinner from "@/components/LoadingSpinner";

const BookingPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const [experience, setExperience] = useState<ExperienceType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const {
    formData,
    errors,
    isSubmitted,
    handleChange,
    handleSubmit,
    resetForm,
  } = useBookingForm({
    initialState: { name: "", email: "", preferredDate: "" },
    experience,
  });


  useEffect(() => {
    if (!slug) return; 

    const foundExperience = data.find((exp) => exp.slug === slug);

    if (!foundExperience) {
      notFound();
      return;
    }

    setExperience(foundExperience);
    setIsLoading(false);
  }, [slug]);

  if (isLoading) return <LoadingSpinner />;

  if (!experience)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Something went wrong — try again.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {isSubmitted ? (
          <Confirmation
            experience={experience}
            formData={formData}
            onMakeAnotherBooking={resetForm}
          />
        ) : (
          <>
            <BackNavigation goto={`experience/${slug}`} content="Back to Experience" />
            <BookingForm
              experience={experience}
              formData={formData}
              errors={errors}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
