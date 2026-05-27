import type { SVGProps } from 'react'

export default function LineStartArrowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M472.31-286.92 168.46-480l303.85-193.08v177.7h364.61v30.76H472.31v177.7Z" />
    </svg>
  )
}
