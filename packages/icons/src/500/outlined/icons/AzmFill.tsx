import type { SVGProps, JSX } from 'react'

export default function AzmFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m630-264.74 173.59-173.59v-365.26H438.33L264.74-630H630v365.26ZM396.41-31.15 570-204.74V-570H204.74L31.15-396.41h365.26v365.26Z" />
    </svg>
  )
}
