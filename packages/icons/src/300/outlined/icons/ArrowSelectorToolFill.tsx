import type { SVGProps, JSX } from 'react'

export default function ArrowSelectorToolFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M551.54-119.77 410.08-423.31 254.62-205.77V-850l503.07 395.38H490L628.46-156l-76.92 36.23Z" />
    </svg>
  )
}
