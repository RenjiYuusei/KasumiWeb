# Kasumi Web

A modern, sleek waitlist application built with Next.js 16, React 19, and TypeScript. Features animated particle backgrounds, email subscriptions, and code verification.

## Features

- **Modern Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Animated UI**: Particle background effects with purple and green themes
- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Email Subscriptions**: Waitlist management with verification codes
- **API Routes**: Serverless functions for subscriptions and code verification
- **Type Safe**: Full TypeScript support for better developer experience
- **Performance Optimized**: Static generation, tree-shaking, optimized bundling
- **Beautiful Design**: Custom Kasumi color palette with smooth animations

## Quick Start

### Prerequisites
- Node.js 18 or later
- npm, pnpm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/RenjiYuusei/KasumiWeb.git
cd KasumiWeb

# Install dependencies
npm install
# or
pnpm install
# or
yarn install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── subscribe/route.ts    # Email subscription
│   │   └── verify/route.ts       # Code verification
│   ├── verify/                   # Verification page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # Reusable components
│   ├── ParticlesBackground.tsx   # Particle animation
│   ├── CopyButton.tsx            # Copy button
│   ├── LandingPageContent.tsx    # Landing page
│   └── VerifyPageContent.tsx     # Verify page
├── lib/                          # Utilities
│   ├── particles.ts              # Particle engine
│   └── utils.ts                  # Helper functions
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
└── next.config.js                # Next.js configuration
```

## Available Scripts

### Development
```bash
npm run dev
```
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### Build
```bash
npm run build
```
Builds the app for production to the `.next` folder.

### Production
```bash
npm run start
```
Runs the built app in production mode.

### Linting
```bash
npm run lint
```
Checks code quality with ESLint.

## API Endpoints

### POST /api/subscribe
Subscribe to the waitlist.

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Subscription successful. Check your email for verification.",
  "code": "verification_code"
}
```

### POST /api/verify
Verify a subscription code.

**Request:**
```json
{
  "code": "verification_code"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Code verified successfully",
  "resetCommand": "ABCD1234EFGH5678"
}
```

## Design System

### Color Palette
- **Primary**: `#8b5cf6` (Purple)
- **Primary Light**: `#a78bfa`
- **Accent**: `#00d9ff` (Cyan)
- **Accent Dark**: `#00b3d9`
- **Success**: `#10b981` (Green)
- **Background**: `#0a0014` (Dark)
- **Surface**: `#150025` (Dark Purple)
- **Border**: `#2d004d`

### Animations
- **Glow**: Text glowing effect
- **FadeIn**: Element fade-in animation
- **Shimmer**: Shimmer effect for elements
- **SuccessPulse**: Success feedback animation
- **SlideInUp**: Slide up animation
- **SlideInDown**: Slide down animation

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
NEXT_PUBLIC_APP_NAME=Kasumi
NEXT_PUBLIC_APP_URL=http://localhost:3000
# Add other environment variables as needed
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Migration Notes

This project was migrated from static HTML to Next.js 16. See [MIGRATION.md](./MIGRATION.md) for detailed information about the migration process.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@kasumi.dev or open an issue on GitHub.

## Changelog

### Version 0.1.0 (Current)
- Initial Next.js migration
- Implemented API routes for subscriptions
- Added particle animation backgrounds
- Created responsive design
- Added TypeScript support

---

**Built with Next.js**
