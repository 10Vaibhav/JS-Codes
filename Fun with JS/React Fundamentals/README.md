# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React Code Examples Documentation

This repository contains several React code examples demonstrating fundamental concepts and progressive improvements in React application development.

## Table of Contents
- [Overview](#overview)
- [Version Breakdown](#version-breakdown)
- [Core Concepts Demonstrated](#core-concepts-demonstrated)
- [Getting Started](#getting-started)

## Overview

This project showcases various React concepts through different versions of a simple application, progressing from basic component rendering to more complex state management and effects.

## Version Breakdown

### Version 0 (v0.txt)
- Basic React components structure
- Props demonstration
- Conditional rendering
- Simple state management using `useState`
- Component composition
- Static post rendering

Key components:
- `ToggleMessage`: Demonstrates conditional rendering
- `Notification`: Shows state management
- `Greeting`: Shows props usage
- `PostComponent`: Reusable component for displaying posts

### Version 1 (v1.txt)
- Enhanced post management
- Dynamic post rendering using array mapping
- State management for multiple posts
- Add post functionality

Improvements:
- Moved `PostComponent` to separate file
- Implemented array-based state management
- Added dynamic post addition feature

### Version 3 (v3.txt)
- Introduction to `useEffect` hook
- Timer implementation
- Side effects management
- Automatic counter increment
- Effect cleanup demonstration

Features:
- Interval-based counter
- Multiple `useEffect` implementations
- Dependency array usage
- Console logging state changes

### Version 4 (v4.txt)
- API integration
- Loading states
- Tab-based navigation
- Dynamic data fetching

Features:
- Fetches data from JSONPlaceholder API
- Loading state management
- Tab-based UI with active state
- Effect-based data fetching

### App.jsx (Final Version)
- Advanced `useEffect` usage
- Component lifecycle management
- Timer implementation with cleanup
- Toggle functionality
- Interval-based component mounting/unmounting

## Core Concepts Demonstrated

1. **State Management**
   - `useState` hook usage
   - Complex state updates
   - Array-based state management

2. **Effects and Lifecycle**
   - `useEffect` hook
   - Cleanup functions
   - Dependency arrays
   - Component mounting/unmounting

3. **Component Patterns**
   - Conditional rendering
   - Props passing
   - Component composition
   - Reusable components

4. **API Integration**
   - Fetch API usage
   - Loading states
   - Error handling
   - Dynamic data fetching

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
```

Each version can be viewed by updating the import in your main `index.jsx` or `main.jsx` file.

## Notes

- The code progressively introduces more complex React concepts
- Each version builds upon the previous one
- Components are designed to be reusable and maintainable
- The final version (App.jsx) demonstrates best practices for effect cleanup and component lifecycle management
