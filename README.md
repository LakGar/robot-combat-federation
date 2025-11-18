# RCF - Robot Combat Federation

A high-impact, futuristic website for the Robot Combat Federation, featuring a dark industrial aesthetic with neon accents and cinematic robot combat imagery.

## Design System

### Color Palette
- **Black**: `#000000` (rcf-black)
- **Charcoal**: `#1a1a1a` (rcf-charcoal)
- **Dark**: `#0d0d0d` (rcf-dark)
- **Neon Blue**: `#00f0ff` (rcf-neon-blue)
- **Teal**: `#00d4ff` (rcf-teal)
- **Hazard Yellow**: `#ffd700` (rcf-hazard-yellow)
- **Steel**: `#4a5568` (rcf-steel)
- **Metallic**: `#718096` (rcf-metallic)

### Typography
- **Headlines**: Orbitron (Condensed, Ultra-bold)
- **Body**: Inter (Clean, Modern Sans-serif)

### Key Features
- Full-screen cinematic hero section
- About RCF section with stats
- Robot Classes grid (Lightweight, Middleweight, Heavyweight)
- Teams & Competitors showcase
- Event Schedule with ticket purchasing
- Newsletter subscription section
- Responsive design
- Sci-fi UI elements and animations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── RobotClasses.tsx # Robot classes grid
│   ├── Teams.tsx        # Teams showcase
│   ├── Events.tsx       # Event schedule
│   ├── Newsletter.tsx   # Newsletter subscription
│   └── Footer.tsx       # Footer
└── public/              # Static assets
```

## Design Principles

- **High Contrast**: Black backgrounds with bright white and neon accents
- **Clean Grid**: Structured layouts with clear hierarchy
- **Visual Emphasis**: Large, bold typography and imagery
- **Mechanical Design**: Sharp edges, geometric lines, sci-fi UI elements
- **Minimal but Powerful**: Focused content with strong visual impact

## Customization

The design uses Tailwind CSS with custom colors and utilities. Modify `tailwind.config.js` to adjust the color palette, and update `app/globals.css` for additional custom styles.

## Next Steps

- Add actual robot combat imagery
- Implement ticket purchasing functionality
- Add team profile pages
- Integrate with a CMS for event management
- Add animations and transitions
- Implement newsletter backend

