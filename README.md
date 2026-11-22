# My Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- ⚡ Fast and optimized with Next.js
- 🎭 Smooth animations with Framer Motion
- 🎯 Sections for About, Skills, Projects, Achievements, and Contact
- 📧 Contact form
- 🌈 Gradient effects and modern styling

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Add Your Profile Picture

1. Place your profile picture in the `public` folder
2. Name it `profile.jpg` (or update the image paths in `components/Navbar.tsx` and `components/About.tsx`)
3. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
4. Recommended size: 400x400 pixels or larger (square image works best)

### Update Your Information

1. **Hero Section** (`components/Hero.tsx`):
   - Change your name and tagline

2. **About Section** (`components/About.tsx`):
   - Update your bio and what you do

3. **Skills Section** (`components/Skills.tsx`):
   - Update skill categories and their skill tags

4. **Projects Section** (`components/Projects.tsx`):
   - Replace placeholder projects with your actual projects
   - Update project links (GitHub, live demos)

5. **Achievements Section** (`components/Achievements.tsx`):
   - Add your achievements and accomplishments

6. **Contact Section** (`components/Contact.tsx`):
   - Update email, phone, and location
   - Add your social media links (LinkedIn, GitHub, Codeforces, etc.)

7. **Metadata** (`app/layout.tsx`):
   - Update the title and description

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## License

This project is open source and available under the MIT License.
