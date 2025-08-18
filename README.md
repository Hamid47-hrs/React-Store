# React Store

An elegant and scalable online store built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. This project showcases modern, modular front-end architecture, featuring dynamic UI components like hero banners, categories, featured products, special offers, testimonials, and newsletter forms — alongside authentication, protected routes, and stateful shopping cart features.

---

##  Features

- **Fast & Lightweight**: Built with Vite for lightning-fast development and reloads.  
- **Feature-based structure**: Organized under `src/features/...` for modularity and ease of scaling.  
- **Modern Tech Stack**: Uses React, React Router v6, TypeScript, and Tailwind CSS.  
- **Dynamic UI Components**: Includes Hero section, Category overlays, Featured Products, Offers banner, Review carousel, Newsletter signup, and Footer.  
- **Authentication Flow**: Login/Register forms with field validation (including regex-driven password and name checks).  
- **Protected Routing**: Restricted Dashboard access using custom `ProtectedRoute` components.  
- **State Management**: Uses React hooks and Context API for cart and wishlist management.  
- **API Integration**: Fetches products and categories from FakeStoreAPI, simulating real-world e-commerce data.

---

##  Table of Contents

1. [Installation & Setup](#installation--setup)  
2. [Folder Structure](#folder-structure)  
3. [Usage](#usage)  
4. [Architecture Highlights](#architecture-highlights)  
5. [Routing & Protection](#routing--protection)  
6. [Form Validation](#form-validation)  
7. [State & Context](#state--context)  
8. [Future Enhancements](#future-enhancements)  
9. [Contributing](#contributing)  
10. [License](#license)

---

##  Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Hamid47-hrs/React-Store.git
cd React-Store

# Install dependencies
npm install

# Run locally
npm run dev
# Open in your browser: http://localhost:3000 (or port specified by Vite)

# Build for production
npm run build

# Preview production build
npm run preview
```

##  Folder Structure

src/
├── features/
│   ├── home/                → Home page components (Hero, Categories, etc.)
│   ├── auth/                → Login/Register pages + validation logic
│   ├── cart/                → Shopping cart functionality and UI
│   ├── wishlist/            → Wishlist management
│   └── dashboard/           → Protected Dashboard UI
├── components/              → Shared UI elements (e.g., Footer)
├── context/                 → React Context providers (e.g., CartContext)
├── services/                → API route definitions and data-fetch utilities
├── App.tsx                  → Main app + routing setup
└── main.tsx                 → Vite entry point

##  Usage

* Visit ==/== for the Home (customer-facing storefront).
* Visit ==/login== or ==/register== for authentication.
* Visit ==/dashboard== (only accessible after login) for the protected dashboard view.

##  Architecture Highlights

* Component Modularization: Each feature is self-contained with its own components and logic.
* Responsive Design: Tailwind CSS ensures mobile-friendly layouts and consistent styling.
* UX Animations: Customer reviews auto-scroll every 5 seconds; Category overlays animate on hover; Hero section includes gradient, imagery, and call-to-action buttons.
* Dynamic API Fetching: Categories and Featured Products are retrieved from FakeStoreAPI endpoints.

## Routing & Protection

* Uses React Router v6 for client-side navigation.
* Authentication state is tracked via ==localStorage==, and a custom ==ProtectedRoute== wrapper redirects unauthenticated users to ==/login==.
* Post-registration, users are programmatically redirected to the login page via ==useNavigate==.

## Form Validation
