#!/usr/bin/env sh
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ICONS_DIR="$ROOT/packages/icons"

rm -rf "$ICONS_DIR/dist"
printf 'Cleaned dist/\n\n'

built=0
for w in 100 200 300 400 500 600 700; do
  for s in outlined rounded sharp; do
    test -f "$ICONS_DIR/src/$w/$s/index.ts" || continue
    printf 'Building %s/%s…\n' "$w" "$s"
    (cd "$ICONS_DIR" && BUILD_COMBO="$w/$s" node_modules/.bin/tsup)
    built=$((built + 1))
  done
done

printf '\nBuilding per-weight barrels…\n'
for w in 100 200 300 400 500 600 700; do
  test -f "$ICONS_DIR/src/$w/index.ts" || continue
  printf 'Building %s…\n' "$w"
  (cd "$ICONS_DIR" && BUILD_WEIGHT="$w" node_modules/.bin/tsup)
done

printf '\nGenerating type declarations…\n'
node --import tsx/esm "$ROOT/scripts/generate-dts.ts"

printf '\nBuilt %d combination(s).\n' "$built"
