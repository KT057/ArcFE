# Front End Boilerplate

A modern front-end development boilerplate with monorepo architecture using pnpm workspaces, featuring React applications, a comprehensive UI component library with Storybook, and WordPress integration.

## Architecture

This project uses a monorepo structure with the following packages:

- **`@apps/ui`** - Shared UI component library with Storybook
- **`@apps/web`** - React web application built with Vite
- **`@apps/wordpress`** - WordPress theme with modern tooling

## Quick Start

1. **Install dependencies:**

   ```bash
   pnpm setup
   ```

2. **Development:**

   ```bash
   # Start UI components development (Storybook)
   pnpm @ui storybook

   # Start web application
   pnpm @web dev

   # Start WordPress development
   pnpm @wp dev
   ```

## Features

### UI Component Library

- **Storybook** for component development and documentation
- **Figma integration** for automated font style extraction
- **Icon generation** from SVG files with automatic TypeScript exports
- **Styled Components** theming system

### Development Tools

- **Turborepo** for optimized monorepo builds and caching
- **Biome** for fast linting and formatting
- **TypeScript** with strict configuration
- **Vite** for fast development builds

### Styling System

- CSS-in-JS with styled-components
- Figma design token integration
- Responsive design utilities
- Theme system with dark/light mode support

## Package Scripts

### Global Scripts

```bash
pnpm @ui       # Run commands in UI package
pnpm @web      # Run commands in Web package
pnpm @wp       # Run commands in WordPress package
```

### UI Development

```bash
# Start Storybook
pnpm @ui storybook

# Build Storybook for production
pnpm @ui build-storybook
```

### Web Development

```bash
# Start development server
pnpm @web dev

# Build for production
pnpm @web build

# Serve built files
pnpm @web start

# Type checking
pnpm @web tsc
```
