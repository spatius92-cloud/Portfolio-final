# 🎨 Kerapetse Kehakgametse - Portfolio Website
## Complete Setup & Getting Started Guide

Congratulations! You now have a fully functional, modern, and creative portfolio website. This document will guide you through getting started immediately.

---

## 📦 What You've Received

A complete, production-ready portfolio website with the following components:

### Files Included
```
portfolio-website/
├── index.html              # Main website file (all sections in one)
├── README.md              # Comprehensive documentation
├── CUSTOMIZE.md           # Quick customization reference
├── css/
│   └── styles.css         # All styling & animations
└── js/
    └── script.js          # All interactive features
```

### Total Size
- HTML: ~35KB
- CSS: ~60KB  
- JavaScript: ~35KB
- **Total: ~130KB** (lightning fast!)

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Open in VS Code
1. Download the `portfolio-website` folder
2. Open Visual Studio Code
3. Drag & drop the folder into VS Code, OR
4. File → Open Folder → Select `portfolio-website`

### Step 2: Preview Immediately
**Option A - Live Server (Recommended)**
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Click "Open with Live Server"
4. Website opens in your browser automatically

**Option B - Direct Preview**
1. Double-click `index.html`
2. Opens in your default browser

### Step 3: Start Customizing
Use `CUSTOMIZE.md` for quick reference:
- Find & Replace your name
- Update email and phone
- Add your social media links
- Replace placeholder images

---

## ✨ Key Features at a Glance

### Visual Design ✓
- [x] Modern dark theme with vibrant gradients
- [x] Animated gradient orbs and backgrounds
- [x] Smooth scroll animations
- [x] Parallax effects
- [x] Hover animations throughout
- [x] Responsive on all devices

### Sections ✓
- [x] Hero Section (landing page)
- [x] About Section (bio, education, skills)
- [x] Portfolio Section (9 sample projects)
- [x] Services Section (6 service cards)
- [x] Testimonials Section (carousel)
- [x] Contact Section (form + social links)
- [x] Footer (navigation, copyright)

### Interactive Features ✓
- [x] Sticky navigation bar
- [x] Mobile hamburger menu
- [x] Dark/Light mode toggle
- [x] Scroll progress indicator
- [x] Portfolio filtering
- [x] Lightbox image gallery
- [x] Testimonial carousel
- [x] Contact form with validation
- [x] Back-to-top button
- [x] Active nav highlighting

### Technical ✓
- [x] Fully responsive (mobile, tablet, desktop)
- [x] SEO optimized
- [x] Performance optimized
- [x] Accessibility ready
- [x] Modern CSS (variables, gradients, animations)
- [x] Vanilla JavaScript (no dependencies)
- [x] Cross-browser compatible
- [x] Easy to customize

---

## 🎯 Immediate Customization (10 Minutes)

### 1. Your Information
Open `index.html` and use Ctrl+F to find and replace:

```
Find: "Kerapetse Kehakgametse"
Replace with: "Your Name"

Find: "Graphic Designer | Photographer | Videographer"
Replace with: "Your Profession"

Find: "Gaborone, Botswana"
Replace with: "Your City, Country"

Find: "your.email@example.com"
Replace with: "your.actual@email.com"

Find: "+267123456789"
Replace with: "Your Phone Number"
```

### 2. Social Media Links
Still in `index.html`, find and update:
- `https://instagram.com/yourhandle` → Your Instagram
- `https://facebook.com/yourpage` → Your Facebook
- `https://linkedin.com/in/yourprofile` → Your LinkedIn
- `https://youtube.com/yourchannel` → Your YouTube
- `https://wa.me/267123456789` → Your WhatsApp

### 3. Color Theme (Optional)
Open `css/styles.css` and look for:
```css
:root {
    --accent-primary: #ff006e;      /* Change this pink to your color */
    --accent-secondary: #00d9ff;    /* Change this cyan to your color */
    --accent-tertiary: #8338ec;     /* Change this purple */
}
```

Try these color combinations:
- **Blue**: `#3b82f6`, `#06b6d4`, `#6366f1`
- **Green**: `#10b981`, `#14b8a6`, `#8b5cf6`
- **Orange**: `#ea580c`, `#0369a1`, `#7c3aed`

---

## 🖼️ Adding Your Images

### Step 1: Create Images Folder
In the `portfolio-website` folder, create a new folder called `images`

### Step 2: Add Your Images
- Save your profile photo as `profile.jpg`
- Save your about photo as `about.jpg`
- Save portfolio projects as `project-1.jpg`, `project-2.jpg`, etc.

### Step 3: Update HTML
In `index.html`, find and replace placeholder image URLs:

**Hero Section Image:**
```html
<!-- Find this: -->
<img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop" alt="Kerapetse Kehakgametse">

<!-- Replace with: -->
<img src="images/profile.jpg" alt="Kerapetse Kehakgametse">
```

**About Section Image:**
```html
<!-- Find this: -->
<img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" alt="About Kerapetse">

<!-- Replace with: -->
<img src="images/about.jpg" alt="About Kerapetse">
```

**Portfolio Images:**
```html
<!-- Replace each portfolio image -->
<img src="https://images.unsplash.com/..." alt="Project Name">

<!-- With: -->
<img src="images/portfolio-1.jpg" alt="Project Name">
```

---

## 📚 Documentation Structure

### For Quick Changes
👉 **Use `CUSTOMIZE.md`**
- Find & replace table
- Color palettes
- Font combinations
- Quick customization checklist

### For Detailed Setup
👉 **Use `README.md`**
- Complete feature overview
- Project structure explanation
- Full customization guide
- Advanced features
- Deployment instructions
- Troubleshooting section

### For Development
👉 **Use Code Comments**
- HTML: `<!-- SECTION NAME START/END -->`
- CSS: `/* ========== SECTION NAME ========== */`
- JavaScript: `// ============================================`

---

## 🔧 Folder Structure Explained

```
portfolio-website/
│
├── index.html                # Main file - contains all HTML
│   ├── Navigation bar
│   ├── Hero section
│   ├── About section
│   ├── Portfolio section
│   ├── Services section
│   ├── Testimonials section
│   ├── Contact section
│   └── Footer
│
├── css/
│   └── styles.css           # All styling
│       ├── Variables & theme
│       ├── Navigation styles
│       ├── Hero section styles
│       ├── Section styles
│       ├── Animations & transitions
│       ├── Responsive breakpoints
│       └── Utility classes
│
├── js/
│   └── script.js            # All interactivity
│       ├── Navigation toggle
│       ├── Dark mode toggle
│       ├── Portfolio filtering
│       ├── Lightbox gallery
│       ├── Testimonial carousel
│       ├── Contact form
│       ├── Scroll animations
│       └── Utility functions
│
└── README.md                # Full documentation
```

---

## 🎨 Customization Priority (Ranked by Impact)

### High Priority (Do These First)
1. ✅ Update your name
2. ✅ Update your profession
3. ✅ Update your email & phone
4. ✅ Update social media links
5. ✅ Replace profile images

### Medium Priority (Good to Do)
6. ✅ Update about section bio
7. ✅ Update portfolio projects
8. ✅ Update services descriptions
9. ✅ Change color scheme (optional)
10. ✅ Add real testimonials

### Low Priority (Nice to Have)
11. ✅ Change fonts
12. ✅ Adjust spacing
13. ✅ Set up email backend
14. ✅ Add Google Analytics
15. ✅ Deploy to web hosting

---

## 🎬 How to Use Each Section

### Navigation Bar
- Sticky at top of page
- Auto-hides on mobile
- Dark mode toggle
- Active section highlighting

### Hero Section
- Eye-catching introduction
- Call-to-action button scrolls to portfolio
- Animated gradient background
- Fully responsive

### About Section
- Professional biography
- Profile image
- Education details
- Skill tags
- Split layout (image + text)

### Portfolio Section
- 9 sample projects (3 in each category)
- Filter by category
- Click images for lightbox view
- External links to Behance, YouTube, Google Drive
- Hover animations

### Services Section
- 6 service cards
- Icons and descriptions
- Service features listed
- Staggered animations
- Hover effects

### Testimonials Section
- Client testimonials
- Auto-rotating carousel
- Manual navigation buttons
- Responsive layout

### Contact Section
- Contact form with validation
- Contact information display
- Social media icons (5 platforms)
- Professional layout

### Footer
- Quick links
- Service links
- Social links
- Copyright

---

## 🚀 Ready to Deploy?

### Free Hosting Options

**Netlify (Recommended)**
1. Visit [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Connect your repository
4. Drag and drop `portfolio-website` folder
5. Done! Your site is live

**GitHub Pages**
1. Create GitHub account
2. Upload files to repository
3. Enable GitHub Pages in settings
4. Free hosting + free domain

**Vercel**
1. Visit [vercel.com](https://vercel.com)
2. Connect GitHub repository
3. Auto-deploys on push
4. Free custom domain

**Firebase**
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run: `firebase init` and `firebase deploy`
3. Free hosting with SSL

---

## 📋 Pre-Launch Checklist

```
CONTENT SECTION
☐ Updated name
☐ Updated profession
☐ Updated location
☐ Updated email
☐ Updated phone
☐ Wrote about bio
☐ Updated education
☐ Added skills
☐ Added portfolio projects (minimum 6)
☐ Added service descriptions
☐ Added testimonials (minimum 3)
☐ Updated copyright year

IMAGES SECTION
☐ Replaced hero profile image
☐ Replaced about section image
☐ Added portfolio images
☐ Optimized image sizes
☐ Verified image paths

LINKS SECTION
☐ Instagram link
☐ Facebook link
☐ LinkedIn link
☐ YouTube link
☐ WhatsApp link
☐ Behance link
☐ Google Drive link
☐ All links work correctly

DESIGN SECTION
☐ Color scheme looks good
☐ Font is readable
☐ Dark mode works
☐ Light mode works
☐ All animations smooth
☐ No layout issues

TESTING SECTION
☐ Tested on desktop
☐ Tested on tablet
☐ Tested on mobile phone
☐ All buttons clickable
☐ All links working
☐ Form validation works
☐ Dark mode toggle works
☐ Navigation menu works
☐ Portfolio filter works
☐ Lightbox works
☐ Carousel works
☐ Browser compatibility (Chrome, Firefox, Safari, Edge)
☐ Page speed tested
☐ Google Lighthouse score 90+

DEPLOYMENT SECTION
☐ Domain name purchased (optional)
☐ Hosting service chosen
☐ Files uploaded
☐ Site is live
☐ Custom domain configured (optional)
☐ SSL certificate enabled
☐ Google Analytics set up (optional)
☐ Robots.txt configured (optional)
☐ Sitemap.xml created (optional)
```

---

## 💡 Pro Tips for Success

### Content Tips
- Use high-quality images
- Keep descriptions concise
- Add new portfolio items regularly
- Update testimonials with real client feedback
- Keep contact information current

### Design Tips
- Ensure good contrast for readability
- Use consistent spacing
- Optimize images (use TinyPNG)
- Test on multiple devices
- Keep animations subtle

### Performance Tips
- Compress all images
- Minify CSS and JavaScript
- Use a CDN for assets
- Test page speed (Google PageSpeed)
- Aim for Core Web Vitals: Good

### SEO Tips
- Update meta descriptions
- Use relevant keywords
- Create robots.txt
- Submit sitemap to Google
- Use descriptive image alt text
- Build backlinks to your site

---

## 🆘 Getting Help

### Built-in Documentation
- **CUSTOMIZE.md** - Quick changes
- **README.md** - Detailed guide
- **Code Comments** - Inline explanations

### Online Resources
- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS reference
- [CSS Tricks](https://css-tricks.com/) - CSS tips and tricks
- [Stack Overflow](https://stackoverflow.com/) - Code help
- [Google Fonts](https://fonts.google.com/) - Font selection
- [Color Picker](https://htmlcolorcodes.com/) - Color selection

### Browser DevTools
Press `F12` to open developer tools:
- Inspect HTML elements
- Debug CSS issues
- Test responsive design
- Check JavaScript console for errors
- Test network performance

---

## 🎉 You're All Set!

Your professional portfolio website is ready to customize and launch. Here's your next steps:

1. **Now**: Open in VS Code and preview with Live Server
2. **Today**: Customize with your information and images
3. **This Week**: Add portfolio projects and testimonials
4. **Before Launch**: Complete the pre-launch checklist
5. **Launch**: Deploy to free hosting (Netlify recommended)

---

## 📞 Quick Reference

| Task | File | Section |
|------|------|---------|
| Change name | index.html | Hero Section |
| Change colors | css/styles.css | :root |
| Change fonts | css/styles.css | body font-family |
| Add images | images/ | Create folder |
| Update portfolio | index.html | Portfolio Section |
| Update services | index.html | Services Section |
| Setup contact form | README.md | Contact Form Backend |
| Deploy site | README.md | Deployment |

---

## ✅ Feature Checklist

```
INTERACTIVE FEATURES
✓ Dark/Light mode toggle
✓ Mobile hamburger menu
✓ Smooth scrolling navigation
✓ Portfolio category filtering
✓ Lightbox image gallery
✓ Testimonial carousel
✓ Contact form with validation
✓ Back-to-top button
✓ Scroll progress indicator
✓ Active nav highlighting

ANIMATION & EFFECTS
✓ Animated gradient backgrounds
✓ Scroll fade-in animations
✓ Hover effects on buttons
✓ Image zoom on hover
✓ Smooth transitions
✓ Auto-rotating testimonials
✓ Staggered card animations
✓ Smooth scroll behavior

DESIGN FEATURES
✓ Modern dark theme
✓ Vibrant gradients
✓ Responsive grid layouts
✓ Professional typography
✓ Consistent spacing
✓ Accessible colors
✓ Mobile-first design
✓ CSS custom properties
```

---

## 🚀 Launch Checklist Summary

**Week 1**: Setup & Customize
- [ ] Open in VS Code
- [ ] Preview in browser
- [ ] Update name & profession
- [ ] Update contact info
- [ ] Replace images

**Week 2**: Add Content
- [ ] Write about bio
- [ ] Add portfolio projects
- [ ] Update services
- [ ] Add testimonials
- [ ] Update colors/fonts

**Week 3**: Test & Optimize
- [ ] Test all features
- [ ] Mobile testing
- [ ] Performance check
- [ ] Browser compatibility
- [ ] Accessibility check

**Week 4**: Launch
- [ ] Choose hosting
- [ ] Deploy website
- [ ] Configure domain
- [ ] Set up analytics
- [ ] Share with world

---

## 🎓 Learning Resources

### CSS & Design
- Gradients: [CSS Gradients Guide](https://www.w3schools.com/css/css3_gradients.asp)
- Animations: [CSS Animations](https://www.w3schools.com/css/css3_animations.asp)
- Grid Layout: [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

### JavaScript
- DOM Manipulation: [DOM Intro](https://www.w3schools.com/js/js_htmldom.asp)
- Events: [JavaScript Events](https://www.w3schools.com/js/js_events.asp)
- LocalStorage: [Web Storage](https://www.w3schools.com/html/html5_webstorage.asp)

### Web Performance
- Image Optimization: [Web.dev Images](https://web.dev/use-imagemin-to-compress-images/)
- Page Speed: [PageSpeed Insights](https://pagespeed.web.dev/)
- Lighthouse: [Web Vitals](https://web.dev/vitals/)

---

**Happy building! 🎨📸🎬**

Your professional portfolio website is ready to impress the world.

---

*Created with ❤️ for Kerapetse Kehakgametse*  
*Gaborone, Botswana - 2024*
