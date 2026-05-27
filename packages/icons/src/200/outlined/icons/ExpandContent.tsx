import type { SVGProps, JSX } from 'react'

export default function ExpandContent({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-240v-200h30.77v169.23H440V-240H240Zm449.23-280v-169.23H520V-720h200v200h-30.77Z" />
    </svg>
  )
}
