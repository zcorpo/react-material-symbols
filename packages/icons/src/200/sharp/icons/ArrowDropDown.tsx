import type { SVGProps } from 'react'

export default function ArrowDropDown({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-387.69 327.69-539.77h304.62L480-387.69Z" />
    </svg>
  )
}
