import type { SVGProps, JSX } from 'react'

export default function TopicFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h341l60 60h399v580H80Zm170-180h300v-60H250v60Zm0-160h460v-60H250v60Z" />
    </svg>
  )
}
