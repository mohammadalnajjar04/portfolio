# Mohammad Alnajjar — Portfolio

A personal portfolio website built with vanilla HTML, CSS, and JavaScript. Features a modern dark theme, responsive layout, smooth animations, and a clean presentation suitable for job applications.

## Features

- Dark theme with blue/purple accent gradient
- Fully responsive (desktop, tablet, mobile)
- Smooth scrolling navigation with active link highlighting
- Hero section with animated background
- Skills grouped by category
- Project cards with descriptive badges
- Learning roadmap timeline
- Scroll-triggered reveal animations
- Mobile hamburger menu
- Back-to-top button
- Custom scrollbar styling

## File Structure

```
├── index.html          # Main HTML document
├── style.css           # All styles (no frameworks)
├── script.js           # Navigation, animations, interactivity
├── assets/             # Static assets (images, icons, etc.)
└── README.md           # Project documentation
```

## How to Run Locally

This is a static website. No build tools or servers are required.

**Option 1 — Open directly:**

```bash
# Open index.html in your default browser
start index.html
```

**Option 2 — Local server (recommended for full functionality):**

```bash
# Using Python (if installed)
python -m http.server 5500

# Using Node.js (if npx is available)
npx serve .
```

Then open `http://localhost:5500` in your browser.

## Deploy to GitHub Pages

1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/your-username/your-repo.git
   git branch -M main
   git push -u origin main
   ```

2. Go to your repository on GitHub → **Settings** → **Pages**.

3. Under **Branch**, select `main` and for folder select `/ (root)`.

4. Click **Save**. Your site will be live at `https://your-username.github.io/your-repo/`.

Alternatively, to serve from the `docs/` folder or a custom branch, adjust the settings accordingly.

## Customization

- Edit personal details in `index.html` (name, links, bio, projects).
- Adjust colors and spacing in `style.css` under the `:root` variable section.
- Modify animation timing in `script.js`.

## License

MIT
