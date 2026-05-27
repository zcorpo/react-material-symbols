#!/usr/bin/env sh
set -e

ICONS_DIR="$(cd "$(dirname "$0")/../packages/icons" && pwd)"
PARALLEL=${BUILD_PARALLEL:-4}

rm -rf "$ICONS_DIR/dist"
printf 'Cleaned dist/\n\n'

tmp=$(mktemp)
trap 'rm -f "$tmp"' EXIT

for w in 100 200 300 400 500 600 700; do
  for s in outlined rounded sharp; do
    test -f "$ICONS_DIR/src/$w/$s/index.ts" || continue
    printf '%s/%s\n' "$w" "$s" >> "$tmp"
  done
done

count=$(wc -l < "$tmp" | tr -d ' ')
if [ "$count" -eq 0 ]; then
  printf 'No icon sets found in src/. Run: pnpm sync\n'
  exit 1
fi

printf 'Building %s combination(s) with %d parallel jobs…\n\n' "$count" "$PARALLEL"

export ICONS_DIR
xargs -P "$PARALLEL" -I{} sh -c '
  printf "Building {}…\n"
  cd "$ICONS_DIR" && BUILD_COMBO="{}" NODE_OPTIONS="--max-old-space-size=8192" node_modules/.bin/tsup > /dev/null 2>&1
  printf "Done    {}\n"
' < "$tmp"

printf '\nBuilt %s combination(s).\n' "$count"
