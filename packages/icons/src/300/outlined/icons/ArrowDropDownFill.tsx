import type { SVGProps, JSX } from 'react'

export default function ArrowDropDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-373.85 303.85-549.38h352.3L480-373.85Z" />
    </svg>
  )
}
