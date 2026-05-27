import type { SVGProps } from 'react'

export default function KeyboardArrowUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m480-548.26-197 197L234.26-400 480-645.74 725.74-400 677-351.26l-197-197Z" />
    </svg>
  )
}
