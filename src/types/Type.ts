export interface FormData {
  name: string;
  email: string;
  preferredDate: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  preferredDate?: string;
}

export interface ExperienceType {
    id: number;
    slug: string;
    title: string;
    description: string;
    long_description: string;
    image: string;
    category: string;
    host: {
        name: string;
        avatar: string;
    };
    price: number;
}