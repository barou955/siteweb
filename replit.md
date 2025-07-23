# Labtek IT Services Website

## Overview

This is a modern React-based business website for Labtek, an IT services company serving individuals and SMEs in Essonne and Île-de-France, France. The application uses a full-stack TypeScript architecture with a React frontend and Express.js backend, styled with Tailwind CSS and shadcn/ui components. The site is designed for static deployment on Vercel.

## User Preferences

Preferred communication style: Simple, everyday language.
Visual preferences: Balanced theme colors - softer light mode, less intense dark mode.

## Recent Changes

### January 2025
- **Color Theme Adjustments**: Updated light and dark mode colors for better visual comfort
  - Light mode: Changed from pure white to soft gray background (97% instead of 100%)
  - Dark mode: Replaced harsh black with blue-gray tones for less eye strain
  - Improved contrast ratios while maintaining readability
- **Vercel Deployment Configuration**: Added proper static site configuration
  - Created `vercel.json` for deployment settings
  - Added `build-static.js` script for clean static builds
  - Configured routing for SPA behavior on Vercel

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state, React Context for theme management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Server Structure**: Modular route registration with middleware support
- **Development**: Hot reload with Vite integration in development mode

### Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (configured for Neon Database)
- **Schema Location**: `shared/schema.ts` for type-safe database operations
- **Current Schema**: Basic user management (id, username, password)

## Key Components

### Frontend Components
- **Navigation**: Responsive navigation with mobile menu and theme toggle
- **Hero Section**: Gradient background with call-to-action buttons
- **Services Section**: Grid layout showcasing IT services with icons
- **Problems Section**: Common IT problems and solutions
- **Process Section**: 5-step workflow visualization
- **Maintenance Section**: Service tier pricing cards
- **Contact Section**: Formspree-integrated contact form
- **About Section**: Company information with professional imagery
- **Footer**: Complete site navigation and company details

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Centralized route management system
- **Middleware**: Request logging, JSON parsing, error handling
- **Development Tools**: Vite integration for hot reload and asset serving

### Shared Components
- **Schema Definitions**: Drizzle schema with Zod validation
- **Type Safety**: Shared TypeScript types between frontend and backend

## Data Flow

### Current Implementation
1. **Static Content**: All website content is hardcoded in React components
2. **Contact Form**: Form submissions sent to external Formspree service
3. **Theme Management**: Local storage persistence with system preference detection
4. **In-Memory Storage**: User data stored in memory (development only)

### Production-Ready Flow
1. **Database Operations**: Drizzle ORM with PostgreSQL for persistent data
2. **API Endpoints**: RESTful API structure prepared for future expansion
3. **Form Handling**: Contact form ready for backend integration
4. **User Management**: Basic user schema prepared for authentication

## External Dependencies

### Frontend Dependencies
- **UI Components**: Comprehensive Radix UI component library
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Data Fetching**: TanStack Query for server state management
- **Date Handling**: date-fns for date manipulation
- **Styling**: Tailwind CSS with class-variance-authority for component variants

### Backend Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Session Storage**: PostgreSQL session store (connect-pg-simple)
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Third-Party Services
- **Form Processing**: Formspree for contact form submissions
- **Fonts**: Google Fonts (Inter) for typography
- **Images**: Unsplash for placeholder professional imagery

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot reload
- **Database**: Environment variable-based PostgreSQL connection
- **Asset Serving**: Vite middleware integrated with Express

### Production Build
- **Frontend**: Vite build output to `dist/public`
- **Backend**: esbuild compilation to `dist/index.js`
- **Static Assets**: Served directly by Express in production
- **Environment**: NODE_ENV-based configuration switching

### Database Management
- **Migrations**: Drizzle Kit for schema migrations
- **Schema Push**: Direct schema synchronization for development
- **Connection**: Environment variable configuration for different environments

### Platform Considerations
- **Replit Integration**: Cartographer plugin for development environment
- **Runtime Error Handling**: Custom error modal overlay for development
- **Asset Resolution**: Proper path resolution for Replit filesystem

The application is structured as a professional business website with a foundation ready for future expansion into user management, content management, and advanced business features.