import type { SVGProps } from 'react'

export default function KeyboardArrowDown({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-330.43 226.43-584 283-640.57l197 197 197-197L733.57-584 480-330.43Z" />
    </svg>
  )
}
