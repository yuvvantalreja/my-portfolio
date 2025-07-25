# Yuvvan Talreja - Personal Portfolio Website

A sophisticated, modern portfolio website inspired by Apple and Notion's design philosophy. Features clean minimalism with a beautiful teal color scheme, generous white space, smooth animations, and tasteful micro-interactions.

## ✨ Features

- **Clean, Minimalist Design** - Inspired by Apple and Notion's design language
- **Responsive Layout** - Works beautifully on all devices
- **Smooth Animations** - Scroll-triggered animations and micro-interactions
- **Modern Typography** - Using Inter font for crisp, readable text
- **Dark/Light Sections** - Alternating themes for visual interest
- **Interactive Navigation** - Smooth scrolling with active section highlighting
- **Contact Form** - Functional form with validation and notifications
- **Performance Optimized** - Efficient animations and throttled scroll events
- **Accessibility Focused** - Semantic HTML and proper ARIA labels

## 🎨 Design Philosophy

- **Generous White Space** - Content breathes with purposeful spacing
- **Subtle Shadows & Rounded Corners** - Consistent elevation and softness
- **Minimal Color Palette** - Whites, grays, and signature blue (#007AFF)
- **Typography Hierarchy** - Clear hierarchy through size and weight
- **Progressive Disclosure** - Key information first, details on interaction
- **Smooth Micro-interactions** - Buttons respond with gentle scaling and lifting

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling
├── script.js           # Interactive functionality
└── README.md          # This file
```

## 🛠️ Customization Guide

### 1. Personal Information

**Update HTML content in `index.html`:**

- **Hero Section** (lines 42-58): Update name, subtitle, and call-to-action buttons
- **About Section** (lines 62-96): Replace description, skills, and add your photo
- **Projects Section** (lines 100-170): Replace with your actual projects
- **Experience Section** (lines 174-240): Update with your work history
- **Contact Section** (lines 244-290): Update contact information and links

### 2. Adding Your Photos

Replace the image placeholders:

```html
<!-- Replace this in the About section -->
<div class="image-placeholder">
    <span>Your Photo</span>
</div>

<!-- With an actual image -->
<img src="path/to/your-photo.jpg" alt="Your Name" class="profile-image">
```

Add this CSS for the profile image:
```css
.profile-image {
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
    transition: transform var(--transition-medium);
}

.profile-image:hover {
    transform: scale(1.02);
}
```

### 3. Project Images

Replace project image placeholders with actual screenshots:

```html
<!-- Replace this -->
<div class="image-placeholder">Project Image</div>

<!-- With this -->
<img src="path/to/project-screenshot.jpg" alt="Project Name">
```

### 4. Color Customization

Update the signature color in `styles.css`:

```css
:root {
    --color-primary: #007AFF;        /* Change this to your brand color */
    --color-primary-hover: #0056CC;  /* Darker shade for hover states */
}
```

### 5. Font Customization

The site uses Inter font by default. To change the font, update the Google Fonts import in `index.html` and the CSS variable:

```css
:root {
    --font-family: 'Your-Font', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### 6. Adding New Sections

To add a new section, follow this structure:

```html
<section class="new-section" id="new-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Section Title</h2>
            <p class="section-subtitle">Section description</p>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

Don't forget to add the navigation link:
```html
<li><a href="#new-section" class="nav-link">New Section</a></li>
```

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free)

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Create an account at [Netlify](https://netlify.com)
2. Drag and drop the project folder to Netlify
3. Your site will be live instantly with a custom URL
4. Optional: Connect a custom domain

### Option 3: Vercel (Free)

1. Create an account at [Vercel](https://vercel.com)
2. Connect your GitHub repository
3. Deploy with zero configuration
4. Automatic deployments on every push

### Option 4: Traditional Web Hosting

Upload all files to your web hosting provider's public folder (usually `public_html` or `www`).

## 🔧 Advanced Customization

### Adding Google Analytics

Add this to the `<head>` section of `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Contact Form Backend

The contact form currently shows a demo notification. To make it functional:

1. **Netlify Forms**: Add `netlify` attribute to the form tag
2. **Formspree**: Sign up at Formspree and update the form action
3. **EmailJS**: Integrate EmailJS for client-side email sending
4. **Custom Backend**: Create your own API endpoint

### SEO Optimization

Update meta tags in `index.html`:

```html
<title>Your Name - Full Stack Developer</title>
<meta name="description" content="Experienced developer specializing in...">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="...">
<meta property="og:image" content="path/to/social-preview.jpg">
```

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Features

- **Optimized Animations** - Using `transform` and `opacity` for 60fps animations
- **Throttled Scroll Events** - Preventing performance issues during scrolling
- **Intersection Observer** - Efficient scroll-triggered animations
- **Modern CSS** - Using CSS Grid, Flexbox, and CSS custom properties
- **Minimal JavaScript** - Vanilla JS with no external dependencies

## 🔄 Updates and Maintenance

- **Content Updates**: Simply edit the HTML content and redeploy
- **Design Updates**: Modify CSS variables for site-wide changes
- **Feature Updates**: Add new functionality in `script.js`

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you create interesting enhancements, consider sharing them!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Need help customizing your portfolio?** Feel free to reach out or check the comments in the code files for additional guidance.

**Ready to make it yours?** Start by updating your personal information in `index.html` and adding your own photos and projects! 