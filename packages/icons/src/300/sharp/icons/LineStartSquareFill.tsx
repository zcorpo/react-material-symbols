import type { SVGProps, JSX } from 'react'

export default function LineStartSquareFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M488.46-291.54H111.54v-376.92h376.92v165.77h370v45.38h-370v165.77Z" />
    </svg>
  )
}
