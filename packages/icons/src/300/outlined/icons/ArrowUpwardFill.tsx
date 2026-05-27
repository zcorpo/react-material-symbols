import type { SVGProps, JSX } from 'react'

export default function ArrowUpwardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M457.31-180v-513.69L212-448.39 180-480l300-300 300 300-32 31.61-245.31-245.3V-180h-45.38Z" />
    </svg>
  )
}
