# Magic Box 3 - Animated Tile Grid System

## Overview

Magic Box 3 is a sophisticated React-based animation library built with Next.js that provides beautiful animated tile grids for image carousels, banners, and dynamic content displays. The system uses Web Animations API to create smooth, performant transitions between content items.

## Table of Contents

- [Project Structure](#project-structure)
- [Core Components](#core-components)
- [Animation System](#animation-system)
- [Data Management](#data-management)
- [Examples & Usage](#examples--usage)
- [Getting Started](#getting-started)
- [API Reference](#api-reference)

## Project Structure

```
src/
├── components/
│   ├── animated-tile/          # Core animated tile component
│   ├── animations/             # Animation definitions
│   ├── examples/               # Usage examples and demos
│   ├── picture/                # Image display component
│   ├── progress/               # Progress indicator component
│   ├── sub-components/         # Specialized components
│   └── tile-grid/              # Grid layout system
├── data-stubs/                 # Sample data for demos
├── hooks/                      # Custom React hooks
│   └── feeders/                # Content feeding strategies
└── pages/                      # Next.js pages
```

## Core Components

### AnimatedTile

The heart of the system - a component that manages smooth transitions between different content items.

**Key Features:**

- Manages two content layers for seamless transitions
- Supports custom animation functions
- Handles timing and delay controls
- Uses Web Animations API for optimal performance

**Props:**

- `children`: ReactElement - The content to display
- `animation`: AnimType - The animation function to use
- `tileId`: string - Unique identifier that triggers animations when changed
- `delayIn`: number - Delay before animation starts (default: 0)
- `delayOut`: number - Delay before outgoing animation starts (default: 0)

### TileGrid

A flexible grid system that arranges tiles in customizable rows and columns.

**Features:**

- CSS Grid-based layout
- Configurable rows and columns
- Responsive design support
- CSS custom properties for dynamic sizing

**Props:**

- `children`: ReactNode - Tile components to arrange
- `rows`: number - Number of grid rows (default: 2)
- `cols`: number - Number of grid columns (default: 4)

## Animation System

The animation system is based on a modular approach where each animation is a pure function that returns Web Animation objects.

### Animation Type Definition

```typescript
type AnimType = (
  refs: HTMLDivElement[],
  delayIn?: number,
  delayOut?: number,
) => Animation[];
```

### Available Animations

#### 1. Tarzan Animation

- **File**: `src/components/animations/tarzan.ts`
- **Effect**: Rotating swing effect from top corners
- **Use Case**: Dynamic, eye-catching transitions
- **Timing**: 1000ms duration with cubic-bezier easing

#### 2. Slider-L Animation

- **File**: `src/components/animations/slider-L.ts`
- **Effect**: Horizontal slide from left with scale transition
- **Use Case**: Smooth horizontal transitions
- **Timing**: 1500ms in, 1000ms out

#### 3. Fish-Eye Animation

- **File**: `src/components/animations/fish-eye.ts`
- **Effect**: Scale-based zoom transition
- **Use Case**: Focus-drawing content changes

#### 4. Fade Animation

- **File**: `src/components/animations/fade.ts`
- **Effect**: Opacity-based crossfade
- **Use Case**: Subtle content transitions

## Data Management

### Content Feeders

The system uses "feeder" hooks to manage content rotation and timing:

#### useLinear Hook

- **Purpose**: Sequential content feeding
- **Features**:
  - Cluster-based content grouping
  - Progress tracking
  - Pause/resume functionality
  - Configurable intervals

**Configuration:**

```typescript
interface FeederProps {
  content: ContentProps[];
  clusterSize?: number;
  interval: number;
  onProgress?: (progress: number) => void;
}
```

#### useRandom Hook

- **Purpose**: Random content selection
- **Features**: Non-sequential content display

## Examples & Usage

### 1. WaveExample Component

Creates animated image carousels with configurable animations.

```tsx
<WaveExample
  selectedAnim={tarzan}
  rows={2}
  cols={3}
  delay={2000}
  animDelay={100}
/>
```

**Features:**

- Mouse hover pause/resume
- Staggered animation timing
- Configurable grid dimensions
- Image optimization

### 2. BannerMosaic Component

Large-scale mosaic display with background content feeding.

**Features:**

- 5x5 grid layout
- 5-second rotation intervals
- Progress tracking
- Food/cooking themed content

### 3. BannerTarzan Component

Hero banner with tarzan animation effects.

**Features:**

- Dramatic swing transitions
- Overlay text support
- Full-banner coverage

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the examples

### Basic Usage

```tsx
import { AnimatedTile } from './components/animated-tile/animated-tile';
import { TileGrid } from './components/tile-grid/tile-grid';
import { tarzan } from './components/animations/tarzan';

function MyComponent() {
  const [currentId, setCurrentId] = useState('1');

  return (
    <TileGrid rows={2} cols={2}>
      <AnimatedTile
        animation={tarzan}
        tileId={currentId}
        delayIn={0}
        delayOut={200}
      >
        <img src="your-image.jpg" alt="content" />
      </AnimatedTile>
    </TileGrid>
  );
}
```

## API Reference

### Core Components

#### AnimatedTile Props

| Prop      | Type         | Default   | Description                     |
| --------- | ------------ | --------- | ------------------------------- |
| children  | ReactElement | required  | Content to animate              |
| animation | AnimType     | undefined | Animation function              |
| tileId    | string       | required  | Unique ID triggering animations |
| delayIn   | number       | 0         | Incoming animation delay (ms)   |
| delayOut  | number       | 0         | Outgoing animation delay (ms)   |

#### TileGrid Props

| Prop     | Type      | Default  | Description       |
| -------- | --------- | -------- | ----------------- |
| children | ReactNode | required | Grid content      |
| rows     | number    | 2        | Number of rows    |
| cols     | number    | 4        | Number of columns |

### Animation Functions

All animations follow the `AnimType` signature:

- **Parameters**: `refs[]`, `delayIn?`, `delayOut?`
- **Returns**: `Animation[]` - Array of Web Animation objects
- **Usage**: Automatically called by AnimatedTile component

### Custom Hooks

#### useLinear

```typescript
const { tiles, feeder } = useLinear({
  content: ContentProps[],
  clusterSize?: number,
  interval: number,
  onProgress?: (progress: number) => void
});
```

**Returns:**

- `tiles`: Current content cluster
- `feeder`: Control object with `play()`, `pause()`, `clear()` methods

## Technical Details

### Performance Considerations

- Uses Web Animations API for hardware acceleration
- Minimal DOM manipulation through ref-based approach
- Efficient content clustering reduces re-renders
- CSS-based grid system for optimal layout performance

### Browser Support

- Modern browsers supporting Web Animations API
- Fallback animations possible through CSS transitions
- Requires ES2020+ JavaScript features

### Styling Approach

- CSS Modules for component-scoped styling
- CSS Custom Properties for dynamic configuration
- Flexbox and CSS Grid for layout
- Hardware-accelerated transforms for animations

## Extending the System

### Creating Custom Animations

1. Define animation keyframes
2. Create timing configuration
3. Implement AnimType function
4. Export for use in components

Example:

```typescript
const myAnimation: AnimType = (refs, delayIn = 0, delayOut = 0) => {
  const animations: Animation[] = [];

  if (refs[0]) {
    animations.push(
      refs[0].animate([{ transform: 'scale(0)' }, { transform: 'scale(1)' }], {
        duration: 500,
        delay: delayIn,
      }),
    );
  }

  return animations;
};
```

### Adding Content Feeders

Implement the FeederType interface:

```typescript
interface FeederType {
  tiles: ContentProps[];
  feeder: {
    play: () => void;
    pause: () => void;
    clear: () => void;
  };
}
```

## Contributing

The codebase follows these conventions:

- TypeScript for type safety
- React functional components with hooks
- CSS Modules for styling
- ESLint for code quality
- Next.js app structure

## License

This project is private and not licensed for public use.
