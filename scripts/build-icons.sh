#!/usr/bin/env sh
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ICONS_DIR="$ROOT/packages/icons"
BINDIR="$ICONS_DIR/node_modules/.bin"

# Resolve the actual esbuild Go binary from the wrapper script
_rel=$(grep '".*esbuild"' "$BINDIR/esbuild" 2>/dev/null | head -1 \
  | sed "s|.*\"\\\$basedir/\([^\"]*\)\".*|\1|")
ESBUILD_BIN="$(cd "$BINDIR" && cd "$(dirname "$_rel")" && pwd)/$(basename "$_rel")"

if [ ! -x "$ESBUILD_BIN" ]; then
  # Fallback: find the Go binary directly in the pnpm store
  ESBUILD_BIN=$(find "$ROOT/node_modules/.pnpm" -path "*/esbuild/bin/esbuild" \
    -type f -perm +0111 2>/dev/null | head -1)
fi

if [ ! -x "$ESBUILD_BIN" ]; then
  printf 'ERROR: could not locate esbuild binary\n' >&2
  exit 1
fi

rm -rf "$ICONS_DIR/dist"
printf 'Cleaned dist/\n\nesbuild: %s\n\n' "$ESBUILD_BIN"

# Build icon files in batches of 500 (ESM + CJS in parallel, low memory)
build_icons() {
  src="$ICONS_DIR/src/$1/$2/icons"
  dst="$ICONS_DIR/dist/$1/$2/icons"
  find "$src" -name "*.tsx" | xargs -n 500 "$ESBUILD_BIN" \
    --format=esm --jsx=automatic --target=es2020 \
    --out-extension:.js=.mjs --outbase="$src" --outdir="$dst" &
  find "$src" -name "*.tsx" | xargs -n 500 "$ESBUILD_BIN" \
    --format=cjs --jsx=automatic --target=es2020 \
    --outbase="$src" --outdir="$dst" &
  wait
}

built=0
for w in 100 200 300 400 500 600 700; do
  for s in outlined rounded sharp; do
    test -f "$ICONS_DIR/src/$w/$s/index.ts" || continue
    printf 'Building %s/%s…\n' "$w" "$s"
    mkdir -p "$ICONS_DIR/dist/$w/$s/icons"
    (cd "$ICONS_DIR" && BUILD_COMBO="$w/$s" node_modules/.bin/tsup)
    build_icons "$w" "$s"
    built=$((built + 1))
  done
done

printf '\nGenerating type declarations…\n'
node --import tsx/esm "$ROOT/scripts/generate-dts.ts"

printf '\nBuilt %d combination(s).\n' "$built"
