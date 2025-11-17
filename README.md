# ArcFE

A modern front-end development boilerplate with monorepo architecture using pnpm workspaces, featuring React applications and a comprehensive UI component library with Storybook.

## Storybook Page

https://kichikawa57.github.io/ArcFE

## Architecture

This project uses a monorepo structure with the following workspace packages:

### Apps
- **`@apps/web`** - React web application built with Vite

### Packages
- **`@packages/ui`** - Shared UI component library with Storybook
- **`@packages/context`** - React Context providers and state management
- **`@packages/hooks`** - Reusable React hooks
- **`@packages/libs`** - Core libraries and utilities
- **`@packages/utils`** - Utility functions and helpers
- **`@packages/tests`** - Testing utilities and configurations

## Quick Start

1. **Install dependencies:**

   ```bash
   pnpm i
   ```

2. **Development:**

   ```bash
   # Start UI components development (Storybook)
   pnpm @ui storybook

   # Start web application
   pnpm @web dev
   ```

3. **Build:**

   ```bash
   # Build all packages
   pnpm build:packages

   # Build web application
   pnpm @web build
   ```

## Features

### UI Component Library

- **Storybook** for component development and documentation
- **Figma integration** for automated design token extraction
- **Icon generation** from SVG files with automatic TypeScript exports
- **Styled Components** theming system
- **AI-powered component catalog** with embeddings for intelligent search

### Development Tools

- **Turborepo** for optimized monorepo builds and caching
- **Biome** for fast linting and formatting
- **TypeScript** with strict configuration
- **Vite** for fast development builds
- **Vitest** for unit and component testing
- **Changesets** for versioning and changelog management

### Styling System

- CSS-in-JS with styled-components
- Figma design token integration
- Responsive design utilities
- Theme system with dark/light mode support

### AI Integration

- Component catalog generation with quickstart examples
- Embeddings-based semantic search
- Automated documentation from Storybook stories

## Package Scripts

### Global Scripts

```bash
pnpm @ui       # Run commands in UI package
pnpm @web      # Run commands in Web package
pnpm @libs     # Run commands in Libs package
```

### UI Development

```bash
# Start Storybook
pnpm @ui storybook

# Build Storybook for production
pnpm @ui build-storybook

# Run visual tests
pnpm @ui test-storybook
```

### Web Development

```bash
# Start development server
pnpm @web dev

# Build for production
pnpm @web build

# Type checking
pnpm @web tsc
```

### Testing

```bash
# Run all tests
pnpm test

# Type check all packages
pnpm tsc
```

### Release Management

```bash
# Add a changeset
pnpm changeset:add

# Version packages
pnpm changeset:version

# Full release (builds, versions, and updates catalog)
pnpm release
```

### AI Catalog

```bash
# Build component catalog
pnpm catalog:build

# Generate embeddings
pnpm catalog:embeddings

# Build catalog and generate embeddings
pnpm catalog:all
```

## Project Structure

```
front-end-boilerplate/
├── apps/
│   └── web/              # React web application
├── packages/
│   ├── ui/               # UI component library
│   ├── context/          # React Context providers
│   ├── hooks/            # Custom React hooks
│   ├── libs/             # Core libraries
│   ├── utils/            # Utility functions
│   └── tests/            # Testing utilities
├── scripts/              # Build and automation scripts
└── package.json          # Root package configuration
```

## Technology Stack

- **React 19** - UI library
- **TypeScript 5** - Type safety
- **Vite 7** - Build tool
- **Styled Components 6** - CSS-in-JS
- **Storybook** - Component documentation
- **Vitest** - Testing framework
- **pnpm** - Package manager
- **Turborepo** - Monorepo build system
- **Biome** - Linter and formatter

## Version

Current version: **2.0.0**
