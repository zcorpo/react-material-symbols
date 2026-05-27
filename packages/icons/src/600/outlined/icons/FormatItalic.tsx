import type { SVGProps } from 'react'

export default function FormatItalic({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M213.26-184.87v-99.78h136.83l135.04-397.13H330.09V-781H729.3v99.22H593.04L458-284.65h155.04v99.78H213.26Z" />
    </svg>
  )
}
