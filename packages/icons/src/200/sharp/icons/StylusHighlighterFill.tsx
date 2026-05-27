import type { SVGProps } from 'react'

export default function StylusHighlighterFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M307.15-350.62V-800h68.62l275.31 132.92v316.46H307.15ZM200-160l32.85-86h494.3L760-160H200Z" />
    </svg>
  )
}
