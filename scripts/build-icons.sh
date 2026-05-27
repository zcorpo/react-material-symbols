#!/usr/bin/env sh
set -e

ICONS_DIR="$(cd "$(dirname "$0")/../packages/icons" && pwd)"

rm -rf "$ICONS_DIR/dist"
printf 'Cleaned dist/\n\n'

built=0
for w in 100 200 300 400 500 600 700; do
  for s in outlined rounded sharp; do
    test -f "$ICONS_DIR/src/$w/$s/index.ts" || continue
    printf 'Building %s/%s…\n' "$w" "$s"
    (cd "$ICONS_DIR" && BUILD_COMBO="$w/$s" NODE_OPTIONS="--max-old-space-size=8192" node_modules/.bin/tsup)
    built=$((built + 1))
  done
done

printf '\nBuilt %d combination(s).\n' "$built"
