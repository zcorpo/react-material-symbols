import type { SVGProps } from 'react'

export default function StylusPenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M276.85-350.62 362-677.31h63.69v-53.84l49-108.85h10.62l49.77 108.85v53.84h63.69l85.15 326.69H276.85ZM200-160l32.85-86h494.3L760-160H200Z" />
    </svg>
  )
}
