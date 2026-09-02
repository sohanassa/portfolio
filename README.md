# Portfolio Website

A modern, responsive portfolio webpage built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Navigation** - Sticky navigation bar with smooth scrolling
- **Hero Section** - Eye-catching landing area with call-to-action button
- **Project Showcase** - Grid layout for displaying your projects
- **Skills Section** - Organized skill categories
- **Contact Links** - Easy access to your social media and email
- **Animations** - Subtle animations and transitions for better UX
- **Modern Styling** - Clean, professional design with CSS variables for easy customization

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # Styling and layout
├── script.js       # JavaScript for interactivity
├── README.md       # This file
└── assets/         # (Optional) For images and media
```

## Customization

### Update Personal Information

Edit `index.html` and replace the following:
- "Your Name" with your actual name
- Project titles and descriptions
- Contact email and social media links
- Your skills and expertise areas

### Modify Colors

Edit `:root` variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-dark: #1f2937;
    --text-light: #6b7280;
    --bg-light: #f9fafb;
}
```

### Add Project Images

1. Create an `assets` folder
2. Add your project images
3. Update the `.project-image` elements in `index.html` to use background images:
```html
<div class="project-image" style="background-image: url('assets/project1.jpg');"></div>
```

## How to Use

1. Open `index.html` in your web browser
2. Customize the content to reflect your information
3. Add your project details and images
4. Update social media links
5. Deploy to GitHub Pages, Netlify, or your preferred hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use and modify this template for your portfolio!
