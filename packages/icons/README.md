# @zcorpo/react-material-symbols

[![npm](https://img.shields.io/npm/v/@zcorpo/react-material-symbols)](https://www.npmjs.com/package/@zcorpo/react-material-symbols)
[![license](https://img.shields.io/npm/l/@zcorpo/react-material-symbols)](https://github.com/zcorpo/react-material-symbols/blob/main/LICENSE)

**7,758 [Material Symbols](https://fonts.google.com/icons) icons as React SVG components.**

- No font loading, no web requests — pure inline SVG
- Full tree shaking — production bundles include only what you import
- 21 combinations: 7 weights × 3 styles (`outlined` / `rounded` / `sharp`)
- Every icon ships with a filled variant (`SearchFill`, `HomeFill`, …)
- `size` prop, full `SVGProps` passthrough, color via CSS `currentColor`
- ESM + CJS, TypeScript declarations included

## Proof for bundle size from Next.js (App router)

<img width="3665" height="2020" alt="Screenshot 2026-05-30 at 9 29 46 PM" src="https://github.com/user-attachments/assets/8a67be23-a503-4f59-89d5-3c7e27568949" />

## Installation

```sh
npm install @zcorpo/react-material-symbols
# pnpm add @zcorpo/react-material-symbols
# yarn add @zcorpo/react-material-symbols
```

## Quick start

```tsx
import { Search, Home, Settings } from '@zcorpo/react-material-symbols/400/rounded'

export default function App() {
  return (
    <nav>
      <Home size={24} />
      <Search size={24} style={{ color: 'royalblue' }} />
      <Settings size={24} className="icon" aria-label="Settings" />
    </nav>
  )
}
```

## Import paths

Choose a weight (`100`–`700`) and style:

```ts
import { ... } from '@zcorpo/react-material-symbols/400/outlined'
import { ... } from '@zcorpo/react-material-symbols/400/rounded'   // recommended default
import { ... } from '@zcorpo/react-material-symbols/400/sharp'
```

All 21 paths follow the same pattern — swap weight and style as needed:

```
/100/outlined   /100/rounded   /100/sharp
/200/outlined   /200/rounded   /200/sharp
/300/outlined   /300/rounded   /300/sharp
/400/outlined   /400/rounded   /400/sharp  ← default export (main/module)
/500/outlined   /500/rounded   /500/sharp
/600/outlined   /600/rounded   /600/sharp
/700/outlined   /700/rounded   /700/sharp
```

## Fill variants

Every icon has a pre-built filled variant with a `Fill` suffix:

```tsx
import { Favorite, FavoriteFill, Star, StarFill } from '@zcorpo/react-material-symbols/400/rounded'

function LikeButton({ liked }: { liked: boolean }) {
  return liked ? <FavoriteFill size={24} style={{ color: 'red' }} /> : <Favorite size={24} />
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Sets both `width` and `height` |
| `...props` | `SVGProps<SVGSVGElement>` | — | All standard SVG attributes (`className`, `style`, `aria-*`, etc.) |

Icons render with `fill="currentColor"` — color is set via the CSS `color` property:

```tsx
<Search size={32} className="text-blue-500" />
<Search size={32} style={{ color: '#1a73e8' }} />
```

## Weight reference

| Weight | Style |
|--------|-------|
| `100` | Thin |
| `200` | Extra-light |
| `300` | Light |
| `400` | Regular (recommended) |
| `500` | Medium |
| `600` | Semi-bold |
| `700` | Bold |

## Framework examples

### Next.js (App Router)

```tsx
// app/components/Nav.tsx
import { Home, Search, Settings } from '@zcorpo/react-material-symbols/400/rounded'

export function Nav() {
  return (
    <nav className="flex gap-4">
      <Home size={24} />
      <Search size={24} />
      <Settings size={24} />
    </nav>
  )
}
```

### Vite / React

```tsx
import { ArrowBack, Check } from '@zcorpo/react-material-symbols/400/outlined'

function SuccessBanner() {
  return (
    <div>
      <Check size={20} style={{ color: 'green' }} />
      Done
    </div>
  )
}
```

## Icons starting with a digit

Icons whose original names start with a digit are prefixed with `Icon` to produce valid identifiers:

```ts
import { Icon10k, Icon360, Icon1kPlus } from '@zcorpo/react-material-symbols/400/rounded'
```

## Tree shaking

This package is marked `"sideEffects": false`. Modern bundlers (webpack 5+, Vite/Rollup, esbuild) will include only the icons you import in production builds. For optimal results, import named exports from a specific subpath rather than dynamic lookups.

## License

MIT — SVG artwork from [google/material-design-icons](https://github.com/google/material-design-icons) (Apache 2.0).
