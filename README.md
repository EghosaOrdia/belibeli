# BeliBeli

BeliBeli is a modern e-commerce web application built with React, TypeScript, and Vite. It offers a stylish, responsive shopping experience with features like flash sales, category browsing, a shopping cart, and notifications—all with smooth animations and a clean UI.

## Features

- ⚡ Flash Sale section with live countdown timer
- 🛒 Shopping cart with quantity controls and item removal
- 🔔 Sidebar notifications
- 🔍 Product search and category filtering
- 🏬 Best-selling stores showcase
- 🎨 Modern, responsive design with custom fonts and smooth scrolling
- 📱 "Download App" prompt for mobile users
- Social media integration (Facebook, YouTube)

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS, custom fonts (Helvetica, Poppins)
- **Icons:** Lucide React
- **Smooth Scrolling:** Lenis

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/EghosaOrdia/belibeli.git
   cd belibeli
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
  App.tsx           # Main application component
  App.css           # Global styles
  assets/           # Images, fonts, constants
    constants/
      media.ts      # Image imports
      variable.ts   # Data for categories, stores, etc.
    fonts/          # Custom font files
    images/         # Product and UI images
public/             # Static assets
```

## Customization

- Update product listings, categories, and store data in `src/assets/constants/variable.ts`.
- Add or replace images in `src/assets/images/`.
- Customize styles in `App.css` or extend with Tailwind classes.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

[MIT](LICENSE)
