import type { FormData, ExperienceType } from "@/types/Type";
import { CircleCheck } from "lucide-react";
import Link from "next/link";

const Confirmation = ({
  experience,
  formData,
  onMakeAnotherBooking,
}: {
  experience: ExperienceType;
  formData: FormData;
  onMakeAnotherBooking: () => void;
}) => (
  <div className="max-w-lg mx-auto">
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-green-500 text-white p-6 text-center">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <CircleCheck className="size-6" />
        </div>
        <h1 className="text-2xl font-bold">Booking Confirmed!</h1>
      </div>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Booking Summary
        </h2>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Experience:</span>
            <span className="font-medium">{experience.title}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Name:</span>
            <span>{formData.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Email:</span>
            <span>{formData.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Date:</span>
            <span>{new Date(formData.preferredDate).toLocaleDateString()}</span>
          </div>

          <div className="flex justify-between border-t pt-3">
            <span className="text-gray-600 font-medium">Price:</span>
            <span className="font-bold text-indigo-600">
              {experience.price}€
            </span>
          </div>
        </div>
        <div className="space-y-3">
          <Link
            href="/experiences"
            className="block w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-4 rounded-lg text-center transition-colors"
          >
            Browse More Experiences
          </Link>
          <button
            onClick={onMakeAnotherBooking}
            className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Make Another Booking
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Confirmation;
