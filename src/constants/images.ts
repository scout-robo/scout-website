/**
 * Centralized Image Constants
 * 
 * This file contains all image paths used throughout the application.
 * Images are organized by category and stored in the public/images/ directory.
 * 
 * When building for production (GitHub Pages), these paths will be resolved correctly
 * because Vite handles public assets automatically.
 * 
 * To add a new image:
 * 1. Place the image file in the appropriate subfolder under public/images/
 * 2. Add the path constant here
 * 3. Import and use the constant in your component
 */

// Logo
export const LOGO_PATH = '/images/logo/scout-logo.png';

// Team Members
export const TEAM_IMAGES = {
  TEJAS_AGARWAL: '/images/team/tejas-agarwal.jpg',
  ARJUN_NANDA: '/images/team/arjun-nanda.png',
  // Add more team members as needed
} as const;

// Advisors
export const ADVISOR_IMAGES = {
  RAYMOND_BETLER: '/images/team/raymond-betler.jpg',
  LESLIE_RICHARDS: '/images/team/leslie-richards.png',
  RANDELL_IWASAKI: '/images/team/randell-iwasaki.jpg',
} as const;

// News Items
export const NEWS_IMAGES = {
  PRODUCT_LAUNCH: '/images/news/product-launch.jpg',
  PARTNERSHIP: '/images/news/partnership.jpg',
  COMPANY_UPDATE: '/images/news/company-update.jpg',
} as const;

// Industries
export const INDUSTRY_IMAGES = {
  RAIL: '/images/industries/rail.png',
  ROADS: '/images/industries/roads.jpg',
  AIRPORTS: '/images/industries/airports.jpg',
  CITIES: '/images/industries/cities.jpg',
} as const;

// Hero Section
export const HERO_IMAGES = {
  VIDEO_POSTER: '/images/hero/video-poster.jpg',
  // Add hero background images here
} as const;

// Features Section
export const FEATURE_IMAGES = {
  FEATURE_1: '/images/features/feature-1.png',
  FEATURE_2: '/images/features/feature-2.png',
  // Add more feature images as needed
} as const;

// Solutions Section
export const SOLUTION_IMAGES = {
  SOLUTION_BG_1: '/images/solutions/solution-bg-1.jpg',
  SOLUTION_BG_2: '/images/solutions/solution-bg-2.jpg',
  SOLUTION_BG_3: '/images/solutions/solution-bg-3.jpg',
  SOLUTION_1: '/images/solutions/solution-1.jpg',
  SOLUTION_2: '/images/solutions/solution-2.jpg',
} as const;

// Technology Section
export const TECHNOLOGY_IMAGES = {
  TECH_1: '/images/technology/tech-1.jpg',
  TECH_2: '/images/technology/tech-2.jpg',
} as const;

// Product Deep Dive
export const PRODUCT_IMAGES = {
  BACKGROUND: '/images/features/product-bg.jpg',
} as const;

// Company Section
export const COMPANY_IMAGES = {
  OFFICE: '/images/features/office.jpg',
  TEAM_WORKING: '/images/features/team-working.png',
} as const;

/**
 * Helper function to get image path with base URL for GitHub Pages
 * This ensures images load correctly regardless of deployment location
 */
export const getImagePath = (path: string): string => {
  // The base path is handled by Vite's base config
  return path;
};

/**
 * Fallback image for missing images
 */
export const FALLBACK_IMAGE = '/images/placeholder.jpg';
