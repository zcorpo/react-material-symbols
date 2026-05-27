import type { SVGProps } from 'react'

export default function LineStartArrowNotchFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M472.31-286.92 168.46-480l303.85-193.08-103.77 177.7h486.84v30.76H368.54l103.77 177.7Z" />
    </svg>
  )
}
