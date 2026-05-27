import type { SVGProps, JSX } from 'react'

export default function DoubleArrow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m296-226 185-254-185-254h27l185 254-185 254h-27Zm234 0 185-254-185-254h27l185 254-185 254h-27Z" />
    </svg>
  )
}
