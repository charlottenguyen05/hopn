# HOPn - Hub of Projects & Networks

A modern web application built with Next.js 15 that showcases experiences and provides a seamless booking system. HOPn represents "Hop into Innovation," "Hub of Projects & Networks," and "Higher Order Prototyping Network."

## 🚀 Features

### Core Pages
- **Homepage (/)** - Hero section with featured experiences grid
- **Experiences Listing (/experiences)** - Searchable and filterable experience catalog
- **Experience Details (/experience/[slug])** - Detailed view with booking capability
- **Booking System (/booking/[slug])** - Form-based booking with confirmation
- **About Page (/about)** - Company information and mission
- **Custom 404 Page** - User-friendly error handling

### Key Features
- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Real-time Search** - Instant filtering as you type
- ✅ **Category Filtering** - Dropdown-based category selection
- ✅ **Pagination** - 8 items per page with smart navigation
- ✅ **Form Validation** - Real-time client-side validation
- ✅ **Booking System** - Complete booking flow with confirmation
- ✅ **TypeScript** - Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Data Source:** Local JSON file
- **Deployment:** Vercel-ready

## 📦 Installation & Setup

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hopn
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
hopn/
├── src/
│   ├── app/
│   │   ├── (routes)/
│   │   │   ├── page.tsx                 # Homepage
│   │   │   ├── about/
│   │   │   │   └── page.tsx             # About page
│   │   │   ├── experiences/
│   │   │   │   ├── page.tsx             # Experiences listing
│   │   │   │   ├── loading.tsx          # Loading skeleton
│   │   │   │   └── components/          # Listing components
│   │   │   ├── experience/
│   │   │   │   └── [slug]/
│   │   │   │       ├── page.tsx         # Experience details
│   │   │   │       └── loading.tsx      # Loading state
│   │   │   ├── booking/
│   │   │   │   └── [slug]/
│   │   │   │       ├── page.tsx         # Booking page
│   │   │   │       ├── components/      # Booking components
│   │   │   │       └── hooks/           # Custom hooks
│   │   │   └── not-found.tsx            # 404 page
│   │   ├── globals.css                  # Global styles
│   │   └── layout.tsx                   # Root layout
│   ├── components/                      # Reusable components
│   │   ├── BackNavigation.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── Hero.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── NavBar.tsx
│   │   ├── SearchBar.tsx
│   │   └── CategoryFilter.tsx
│   └── types/
│       └── Type.ts                      # TypeScript definitions
├── data.json                           # Experience data
├── public/                             # Static assets
└── package.json
```

## 🎯 Implementation Details

### 1. Homepage (/)
- **Hero Section:** Engaging introduction with call-to-action
- **Featured Experiences:** Grid layout showcasing 6 featured experiences
- **Navigation:** Smooth routing to experiences listing page
- **Responsive Design:** Mobile-optimized layout

### 2. Experiences Listing (/experiences)
- **Data Source:** Local JSON file with 50+ experiences
- **Search Functionality:** Real-time filtering by title and description
- **Category Filters:** Dropdown selection for experience categories
- **Pagination:** 10 items per page with intelligent navigation
- **Loading States:** Skeleton components for better UX
- **Responsive Grid:** 1-4 columns based on screen size

### 3. Experience Details (/experience/[slug])
- **Dynamic Routing:** Slug-based URL structure
- **Comprehensive Display:** Title, image, description, price, host info
- **Booking Integration:** Direct navigation to booking page
- **Error Handling:** 404 for invalid slugs
- **Back Navigation:** Easy return to listing page

### 4. Booking System (/booking/[slug])
- **Form Components:** Reusable form inputs with validation
- **Real-time Validation:** Instant feedback as users type
- **Custom Hook:** `useBookingForm` for form state management
- **Confirmation Screen:** Booking summary with success message
- **Console Logging:** Complete booking data logged for debugging

### 5. About Page (/about)
- **Company Information:** Mission, vision, and core values
- **Service Areas:** AI, FinTech, Automation focus
- **Educational Programs:** Bootcamps, workshops, hackathons
- **Visual Design:** Modern layout with engaging graphics

### 6. Custom 404 Page
- **User-friendly Design:** Clear error message
- **Navigation Options:** Links back to main sections
- **Consistent Styling:** Matches overall design theme

## 🔧 Key Components

### Custom Hooks
- **`useBookingForm`** - Form state management and validation
- **`useExperiences`** - Experience data fetching and filtering

### Reusable Components
- **`ExperienceCard`** - Experience display component
- **`SearchBar`** - Real-time search input
- **`CategoryFilter`** - Dropdown category selection
- **`FormInput`** - Validated form input component
- **`LoadingSpinner`** - Loading state indicator

### Form Validation
- **Name:** Required, minimum 2 characters
- **Email:** Required, valid email format
- **Date:** Required, cannot be in the past
- **Real-time Feedback:** Errors appear/disappear as user types

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

## 🔍 Data Structure

### Experience Object
```typescript
interface ExperienceType {
  id: number;
  slug: string;
  title: string;
  description: string;
  long_description: string;
  image: string;
  category: string;
  price?: number;
  host: {
    name: string;
    avatar: string;
  };
}
```

### Booking Data
```typescript
interface BookingData {
  experience: {
    title: string;
    slug: string;
    category: string;
    price?: number;
  };
  customerData: {
    name: string;
    email: string;
    preferredDate: string;
  };
  submittedAt: string;
  bookingId: string;
}
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Homepage loads with featured experiences
- [ ] Search functionality works in real-time
- [ ] Category filtering updates results
- [ ] Pagination navigates correctly
- [ ] Experience details display properly
- [ ] Booking form validates input
- [ ] Confirmation screen shows booking summary
- [ ] About page displays company information
- [ ] 404 page handles invalid routes

## 📝 Development Notes

### Next.js 15 Features Used
- **App Router:** Modern routing system
- **Async Components:** Server-side rendering
- **Dynamic Routes:** Slug-based navigation
- **Loading UI:** Built-in loading states
- **Error Handling:** Custom error boundaries

### Performance Optimizations
- **Image Optimization:** Next.js built-in optimization
- **Code Splitting:** Automatic route-based splitting
- **Lazy Loading:** Components loaded on demand
- **Static Generation:** Pre-built pages where possible


## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
