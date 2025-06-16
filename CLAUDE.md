# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website showcasing web applications, games, and videos. The site uses vanilla JavaScript with ES6 modules and is built without any frameworks or build tools.

## Architecture

### Core Structure
- **index.html**: Main HTML structure with sections for About, Web, Game, and Video works
- **js/main.js**: Main application logic that creates Work instances and renders them to the DOM
- **js/works.js**: Data module containing arrays of work objects (webWorks, gameWorks, videoWorks) with TypeScript-style JSDoc type definitions
- **css/**: Styling with main.css for layout and reset.css for browser normalization

### Key Components
- **Work Class**: Takes work objects and creates DOM elements with hover interactions
- **Work Data Structure**: Each work has title, description, image (can be PNG/JPG or MP4/WEBM), and links array
- **Cache Busting**: CSS and JS files use hash-based cache busting in HTML (e.g., `?43c0045fcf33263632bc8ad0e95bf8e83857f4334d2e3dc767cdc0bdbb796333`)

### Asset Management
- **image/**: Static images (PNG format) for web works and some games
- **video/**: MP4 files used as preview media for interactive works
- Media files are automatically handled by the Work class based on file extension

## Development Notes

- No build process or package management - files are served directly
- Uses ES6 modules (`import`/`export`)
- JSDoc type definitions provide TypeScript-like type safety without compilation
- Cache busting hashes must be updated manually when CSS/JS files change
- All works data is statically defined in works.js - no dynamic content loading