# Customer Service App (Nuxt 3)

This project replicates the "Customer Service" screen using Nuxt 3 and Tailwind CSS, aligned with the provided reference image.

## Customization Guide

### Header Customization
The header (`pages/service.vue`) includes specific placeholders for you to easily swap in your assets:

1.  **Background Image:**
    - Locate the `<!-- Placeholder: Header Background Image -->` comment in `pages/service.vue`.
    - Replace `bg-primary` with your image class, e.g., `bg-[url('/assets/header-bg.png')] bg-cover`.

2.  **Bottom Left Decoration:**
    - Locate the `<!-- Placeholder: Bottom Left Decoration Image -->` comment.
    - Replace the placeholder `div` with your `img` tag: `<img src="/path/to/decoration.png" class="w-16 h-16" />`.

3.  **Bottom Border:**
    - Locate the `<!-- Placeholder: Bottom Border -->` comment.
    - Change the `bg-gradient-to-r` classes to your preferred color or border style.

## Features
- **UI Matched:** Aligned with reference image (Dark Blue theme, Green Gradient Buttons).
- **Production Ready:** Optimized build with strict type checking.
- **Secure:** Integrated `nuxt-security` for strict CSP and HTTP headers.
- **Responsive:** Mobile-first design.

## Setup & Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000/service](http://localhost:3000/service).

3. **Build for Production:**
   ```bash
   npm run build
   ```

## Deployment

### Deploying to Netlify

This project is pre-configured for Netlify deployment via the included `netlify.toml` file.

1.  **Connect to GitHub/GitLab:** Push your code to a repository.
2.  **Import to Netlify:** Create a new site from your repository.
3.  **Automatic Detection:** Netlify should automatically detect Nuxt 3 and use the following settings:
    - **Build Command:** `npm run build`
    - **Publish Directory:** `.output/public`
4.  **Nitro Preset:** Nuxt 3 will automatically use the `netlify` preset when building on Netlify.
