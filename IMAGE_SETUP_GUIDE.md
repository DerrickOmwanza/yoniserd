# Image Setup Guide

## Instructions for Adding Your Images

Your website code has been updated to display the community images you provided. Now you need to add those images to the project.

### Step 1: Save Images to Assets Folder

The images should be saved in: `src/assets/`

Currently, the code references these existing images:
- `gallery1.jpg`
- `gallery2.jpg`
- `gallery3.jpg`
- `gallery4.jpg`
- `gallery5.jpg`
- `gallery6.jpg`

### Step 2: Replace with Your Images

Replace the placeholder images with your actual community photos:

**From your provided images:**
1. **gallery1.jpg** - Youth with banners at event (Drug Abuse Day)
2. **gallery2.jpg** - Youth with health awareness signs (Mental health)
3. **gallery3.jpg** - Large group at National Mental Health Walk
4. **gallery4.jpg** - Community health campaign gathering

Keep existing gallery5.jpg and gallery6.jpg or replace them with more of your community photos.

### Step 3: Where Images Appear

Once images are in the correct folder, they will automatically appear in:

#### **Our Work Page** (`/our-work`)
- **Main Slideshow**: Rotating gallery of all images with descriptions
- **Featured Community Initiatives**: 2x2 grid displaying 4 main images
  - Hover effect: Images zoom in and darken slightly
  - Each has category, title, and description

#### **Impact Page** (`/impact`)
- **Real Impact, Real People Section**: 2x2 grid showcasing your community work
  - Images have hover zoom effect
  - Dark background with white text cards below
  - Display titles and descriptions

#### **Home Page** (if using slideshow)
- Uses the same images in the main hero slideshow

### Image Specifications

**Recommended:**
- Format: JPG or PNG
- Size: 1200x800px or larger
- Quality: High resolution for web (72-96 DPI)
- Aspect Ratio: 3:2 or 4:3 works best

**File naming:**
- Use simple names without spaces
- Examples: `youth-event.jpg`, `health-walk.jpg`

### Step 4: Update Descriptions (Optional)

If you want to customize the descriptions shown with each image, edit these files:

#### For Our Work Page (`src/pages/OurWork.jsx`)

Find this section and update:
```javascript
const galleryImages = [
  {
    image: img1,
    title: 'Youth Community Events', // ← Change this
    description: 'Young leaders organizing...', // ← And this
    category: 'Community Engagement', // ← And this
  },
  // ... more images
];
```

#### For Impact Page (`src/pages/Impact.jsx`)

Find the "Real Impact, Real People" section and update the image captions.

### Current Setup

**Images being used:**
- ✅ Our Work page: Full slideshow + Featured initiatives grid
- ✅ Impact page: Real impact showcase (2x2 grid)
- ✅ Home page: Hero slideshow and About section

**Styling:**
- Hover effects with zoom and shadow
- Category badges and titles
- Responsive grid (2 columns on desktop, 1 on mobile)
- Light background for Impact page, dark for Our Work

### Troubleshooting

If images don't appear:

1. **Check file location**: `src/assets/` folder
2. **Check file names**: Match exactly (case-sensitive on Mac/Linux)
3. **Check file format**: JPG or PNG recommended
4. **Clear cache**: Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
5. **Restart dev server**: Kill and restart `npm start`

### Adding More Images

To add additional community photos:

1. Save images to `src/assets/`
2. Import them in the page file:
   ```javascript
   import newImage from '../assets/your-image.jpg';
   ```
3. Add to the images array:
   ```javascript
   const images = [img1, img2, img3, img4, img5, img6, newImage];
   ```

### Image Captions for Your Photos

**Image 1 (Youth with banners):**
- Title: "Youth Community Engagement"
- Description: "Young leaders mobilizing communities for awareness campaigns"
- Category: "Community Engagement"

**Image 2 (Health awareness signs):**
- Title: "Mental Health Advocacy"
- Description: "Youth promoting mental wellness and open conversations"
- Category: "Health & Wellbeing"

**Image 3 (Mental health walk crowd):**
- Title: "National Health Walk"
- Description: "Thousands of community members participating in health awareness"
- Category: "Community Health"

**Image 4 (Health campaign):**
- Title: "Ground-Level Health Work"
- Description: "Our team implementing health initiatives across Kisii"
- Category: "Health Initiatives"

### Next Steps

1. ✅ Save the 4 images to `src/assets/`
2. Name them as: `gallery1.jpg`, `gallery2.jpg`, `gallery3.jpg`, `gallery4.jpg`
3. Refresh your browser
4. Visit `/our-work` and `/impact` pages to see them in action

If you need help renaming or optimizing images, let me know!
