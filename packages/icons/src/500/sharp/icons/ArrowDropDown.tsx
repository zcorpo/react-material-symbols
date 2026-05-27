import type { SVGProps, JSX } from 'react'

export default function ArrowDropDown({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-354.26 270.2-563.07h419.6L480-354.26Z" />
    </svg>
  )
}
