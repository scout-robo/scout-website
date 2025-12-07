# Image Asset Management

This directory contains all image assets used throughout the Scout Robotics website. Images are organized by category for easy management and maintainability.

## 📁 Folder Structure

```
public/images/
├── logo/               # Company logos and branding
│   └── scout-logo.png
├── team/              # Team member and advisor photos
│   ├── tejas-agarwal.jpg
│   ├── arjun-nanda.jpg
│   ├── raymond-betler.jpg
│   ├── leslie-richards.jpg
│   └── randell-iwasaki.jpg
├── news/              # News and press images
│   ├── product-launch.jpg
│   ├── partnership.jpg
│   └── company-update.jpg
├── industries/        # Industry-specific images
│   ├── rail.jpg
│   ├── roads.jpg
│   ├── airports.jpg
│   └── cities.jpg
├── hero/              # Hero section images and video posters
│   └── video-poster.jpg
├── features/          # Feature showcase images
│   ├── feature-1.jpg
│   ├── feature-2.jpg
│   ├── product-bg.jpg
│   └── office.jpg
├── solutions/         # Solution page images
│   ├── solution-bg-1.jpg
│   ├── solution-bg-2.jpg
│   ├── solution-bg-3.jpg
│   ├── solution-1.jpg
│   └── solution-2.jpg
└── technology/        # Technology section images
    ├── tech-1.jpg
    └── tech-2.jpg
```

## 🚀 How to Add New Images

### Step 1: Add Your Image File

1. Choose the appropriate subfolder based on the image's purpose
2. Place your image file in that folder
3. Use descriptive, kebab-case filenames (e.g., `new-product-launch.jpg`)

### Step 2: Add Image Constant

Open `src/constants/images.ts` and add a constant for your new image:

```typescript
// Example: Adding a new team member photo
export const TEAM_IMAGES = {
  TEJAS_AGARWAL: '/images/team/tejas-agarwal.jpg',
  ARJUN_NANDA: '/images/team/arjun-nanda.jpg',
  NEW_MEMBER: '/images/team/new-member.jpg',  // ← Add this line
} as const;
```

### Step 3: Use in Components

Import and use the constant in your component:

```typescript
import { TEAM_IMAGES } from '../src/constants/images';

// In your component JSX:
<img src={TEAM_IMAGES.NEW_MEMBER} alt="New Team Member" />
```

## 📐 Image Guidelines

### Recommended Sizes

- **Logo**: 400x100px (transparent PNG)
- **Team Photos**: 800x800px (square, portrait)
- **Hero Images**: 1920x1080px (16:9 landscape)
- **News Thumbnails**: 1200x800px (3:2 landscape)
- **Industry Images**: 1200x900px (4:3 landscape)
- **Feature Images**: 1600x900px (16:9 landscape)
- **Solution Backgrounds**: 2400x1350px (16:9 landscape)
- **Technology Images**: 1600x900px (16:9 landscape)

### File Format Best Practices

- **Photos**: Use `.jpg` or `.webp` for smaller file sizes
- **Graphics/Logos**: Use `.png` for transparency or `.svg` for scalability
- **Optimize**: Compress images before uploading (aim for <500KB per image)
- **Naming**: Use lowercase, hyphenated names (e.g., `product-demo-2024.jpg`)

## 🔄 Replacing Placeholder Images

Currently, the site uses placeholder URLs from Unsplash. To replace them:

1. **Download or add your actual images** to the appropriate folder
2. **The image constants are already set up** in `src/constants/images.ts`
3. **Components are already updated** to use these constants
4. **Just replace the placeholder files** with your real images (keep the same filenames)

### Current Placeholders to Replace

- All team member photos in `/images/team/`
- All news images in `/images/news/`
- All industry images in `/images/industries/`
- All feature and solution images

## 🌐 GitHub Pages Deployment

Images in the `public/` folder are automatically handled by Vite during build:

- **Local Development**: Images load from `http://localhost:3000/images/...`
- **Production Build**: Images are copied to `dist/images/...`
- **GitHub Pages**: Accessible at `your-domain.com/images/...`

The `vite.config.ts` is configured with `base: './'` to ensure proper path resolution regardless of deployment location.

## ✅ Checklist for Adding Images

- [ ] Image file added to appropriate subfolder
- [ ] Constant added to `src/constants/images.ts`
- [ ] Image optimized and compressed
- [ ] Filename is descriptive and kebab-case
- [ ] Image meets size guidelines
- [ ] Component updated to import and use the constant

## 🛠 Troubleshooting

### Images not loading in development?
- Ensure the path starts with `/images/` (not `./images/`)
- Restart the dev server after adding new images

### Images not loading after deployment?
- Check that the `public/` folder was properly built to `dist/`
- Verify `vite.config.ts` has `base: './'` configured
- Check browser console for 404 errors

### Need to use external URLs?
- You can still use external URLs directly in components if needed
- However, for better performance and reliability, download and host locally

## 📝 Notes

- All image paths are centralized in `src/constants/images.ts` for easy maintenance
- The `public/` folder is served at the root URL in both dev and production
- Vite automatically optimizes images during build
- Consider using responsive images (`srcset`) for better mobile performance

---

**Questions?** Contact the development team or check the main project README.
