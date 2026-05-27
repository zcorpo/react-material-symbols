# @zcorpo/react-material-symbols

Google's [Material Symbols](https://fonts.google.com/icons) as React SVG components.

- No font loading or web requests at runtime
- Full tree shaking — only icons you import are bundled
- All 7,758 icons across 7 weights × 3 styles = 21 combinations
- `size` prop, full `SVGProps` passthrough, `fill="currentColor"`
- ESM + CJS, TypeScript declarations included

## Installation

```sh
npm install @zcorpo/react-material-symbols
# or
pnpm add @zcorpo/react-material-symbols
# or
yarn add @zcorpo/react-material-symbols
```

## Usage

Pick a weight (`100`–`700`) and style (`outlined` | `rounded` | `sharp`):

```tsx
import { Search, Home, Settings } from '@zcorpo/react-material-symbols/400/rounded'

export default function App() {
  return <Search size={24} className="icon" />
}
```

### Fill variants

Every icon ships with a filled variant suffixed with `Fill`:

```tsx
import { Search, SearchFill } from '@zcorpo/react-material-symbols/400/rounded'
```

### All available import paths

```ts
import { ... } from '@zcorpo/react-material-symbols/100/outlined'
import { ... } from '@zcorpo/react-material-symbols/100/rounded'
import { ... } from '@zcorpo/react-material-symbols/100/sharp'

import { ... } from '@zcorpo/react-material-symbols/200/outlined'
// ...

import { ... } from '@zcorpo/react-material-symbols/400/rounded'  // recommended default

// ...through 700/sharp
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Sets both `width` and `height` |
| `...props` | `SVGProps<SVGSVGElement>` | — | All standard SVG attributes |

Icons render with `fill="currentColor"`, so color is controlled via CSS `color`.

```tsx
<Search size={32} style={{ color: 'blue' }} aria-label="Search" />
```

### Weight reference

| Weight | Appearance |
|--------|-----------|
| 100 | Thin |
| 200 | Extra-light |
| 300 | Light |
| 400 | Regular (default) |
| 500 | Medium |
| 600 | Semi-bold |
| 700 | Bold |

## Icons starting with a digit

A small number of icons have names that start with a digit (e.g. `10k`, `360`). These are exported with an `Icon` prefix to keep them valid identifiers:

```ts
import { Icon10k, Icon360, Icon1kPlus } from '@zcorpo/react-material-symbols/400/rounded'
```

## Contributing / Staying up to date

SVG source comes from [`marella/material-symbols`](https://github.com/marella/material-symbols). To pull the latest icons:

```sh
# Sync all 21 combinations (skips already-synced ones)
pnpm sync

# Re-sync a specific combination
pnpm sync --weight=400 --style=rounded

# Force re-sync everything
pnpm sync --force

# Then rebuild
pnpm build
```

### Repo structure

```
react-material-symbols/
├── packages/icons/          # the published package
│   ├── src/
│   │   └── {weight}/{style}/
│   │       ├── icons/       # one .tsx file per icon
│   │       └── index.ts     # barrel re-exports
│   └── dist/                # built output (gitignored)
├── scripts/
│   ├── sync-icons.ts        # fetches SVGs and generates components
│   └── build-icons.sh       # sequential build runner (one combination at a time)
└── package.json             # workspace root
```

## License

MIT
