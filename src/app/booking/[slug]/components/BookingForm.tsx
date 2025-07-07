import { ExperienceType, FormErrors, FormData } from "@/types/Type";
import FormInput from "./FormInput";

const BookingForm = ({
  experience,
  formData,
  errors,
  onChange,
  onSubmit,
}: {
  experience: ExperienceType;
  formData: FormData;
  errors: FormErrors;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}) => {
  const getMinDate = () => new Date().toISOString().split("T")[0];

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-indigo-500 text-white p-6">
          <h1 className="text-2xl font-bold">Book Experience</h1>
          <p className="text-indigo-100 mt-1">Fill out the form below</p>
        </div>
        <div className="p-6">
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900">{experience.title}</h3>
            <p className="text-gray-600 text-sm">{experience.category}</p>
            {experience.price && (
              <p className="text-lg font-bold text-indigo-600 mt-1">
                ${experience.price}
              </p>
            )}
          </div>
          <form onSubmit={onSubmit} className="space-y-5">
            <FormInput
              label="Full Name *"
              id="name"
              name="name"
              value={formData.name}
              onChange={onChange}
              error={errors.name}
              placeholder="Enter your full name"
            />
            <FormInput
              label="Email Address *"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={onChange}
              error={errors.email}
              placeholder="Enter your email"
            />
            <FormInput
              label="Preferred Date *"
              id="preferredDate"
              name="preferredDate"
              type="date"
              value={formData.preferredDate}
              onChange={onChange}
              error={errors.preferredDate}
              min={getMinDate()}
            />
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
