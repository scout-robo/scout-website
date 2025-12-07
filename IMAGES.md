# Image Management Quick Reference

## Overview

All images are now organized in the `public/images/` directory and referenced through centralized constants in `src/constants/images.ts`. This makes it easy to manage, update, and maintain all images across the website.

## Quick Start

### Adding a New Image

1. **Place your image** in the appropriate folder under `public/images/`
   ```
   public/images/team/new-member.jpg
   ```

2. **Add a constant** in `src/constants/images.ts`
   ```typescript
   export const TEAM_IMAGES = {
     // ... existing images
     NEW_MEMBER: '/images/team/new-member.jpg',
   } as const;
   ```

3. **Use in your component**
   ```typescript
   import { TEAM_IMAGES } from '../src/constants/images';
   
   <img src={TEAM_IMAGES.NEW_MEMBER} alt="New Member" />
   ```

## Folder Structure

```
public/images/
├── logo/          # Logos and branding
├── team/          # Team and advisor photos  
├── news/          # News article images
├── industries/    # Industry-specific photos
├── hero/          # Hero section backgrounds
├── features/      # Feature showcase images
├── solutions/     # Solution page backgrounds
└── technology/    # Technology section images
```

## Current Status

✅ All components updated to use image constants
✅ Folder structure created
✅ Image constants file created
✅ Vite configured for GitHub Pages deployment

## Next Steps

🔄 **Replace placeholder images** - Download your actual images and place them in the appropriate folders (keep the filenames the same as defined in `src/constants/images.ts`)

📸 **Optimize images** - Compress images to reduce file sizes (<500KB recommended)

## Component Reference

| Component | Images Used | Location |
|-----------|-------------|----------|
| Navbar/Footer | Logo | `LOGO_PATH` |
| Company | Team, Advisors, Office | `TEAM_IMAGES`, `ADVISOR_IMAGES`, `COMPANY_IMAGES` |
| News | News articles | `NEWS_IMAGES` |
| IndustryFocus | Industry backgrounds | `INDUSTRY_IMAGES` |
| Hero | Video poster | `HERO_IMAGES` |
| Features | Feature highlights | `FEATURE_IMAGES` |
| Solutions | Solution backgrounds | `SOLUTION_IMAGES` |
| Technology | Tech showcase | `TECHNOLOGY_IMAGES` |
| ProductDeepDive | Product background | `PRODUCT_IMAGES` |

## Documentation

For detailed information, see:
- `public/images/README.md` - Comprehensive image management guide
- `src/constants/images.ts` - All image path constants

## Deployment

When you run `npm run build`, all images from `public/images/` are automatically:
- Copied to `dist/images/`
- Made available at the root URL
- Properly resolved for GitHub Pages deployment

No additional configuration needed!
