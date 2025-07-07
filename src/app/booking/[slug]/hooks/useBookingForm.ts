"use client";
import { ExperienceType, FormErrors, FormData } from "@/types/Type";
import { useState } from "react";

interface UseBookingFormProps {
    initialState: FormData;
    experience: ExperienceType | null;
}

/**
 * Custom hook to manage the state and logic of the booking form.
 */
const useBookingForm = ({ initialState, experience }: UseBookingFormProps) => {
    const [formData, setFormData] = useState<FormData>(initialState);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateField = (fieldName: string, value: string): string | undefined => {
        switch (fieldName) {
            case 'name':
                if (!value.trim()) {
                    return "Name is required";
                } else if (value.trim().length < 2) {
                    return "Name must be at least 2 characters";
                }
                break;
            case 'email':
                if (!value.trim()) {
                    return "Email is required";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    return "Please enter a valid email address";
                }
                break;
            case 'preferredDate':
                if (!value) {
                    return "Preferred date is required";
                } else {
                    const selectedDate = new Date(value);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    if (selectedDate < today) {
                        return "Date cannot be in the past";
                    }
                }
                break;
        }
        return undefined;
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        const nameError = validateField('name', formData.name);
        if (nameError) newErrors.name = nameError;

        const emailError = validateField('email', formData.email);
        if (emailError) newErrors.email = emailError;

        const dateError = validateField('preferredDate', formData.preferredDate);
        if (dateError) newErrors.preferredDate = dateError;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Update form data
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Real-time validation
        const fieldError = validateField(name, value);
        setErrors((prev) => ({
            ...prev,
            [name]: fieldError
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm() || !experience) return;
        const bookingData = {
            experience: { title: experience.title, slug: experience.slug, category: experience.category, price: experience.price },
            customerData: formData,
            submittedAt: new Date().toISOString(),
            bookingId: `BK-${Date.now()}`,
        };
        console.log("🎉 Booking Form Submitted:", bookingData);
        setIsSubmitted(true);
    };

    const resetForm = () => {
        setFormData(initialState);
        setErrors({});
        setIsSubmitted(false);
    };

    return { formData, errors, isSubmitted, handleChange, handleSubmit, resetForm };
};

export default useBookingForm;