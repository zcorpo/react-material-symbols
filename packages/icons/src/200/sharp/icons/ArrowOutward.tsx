import type { SVGProps, JSX } from 'react'

export default function ArrowOutward({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M241.23-271.38 220-292.62l415.85-416.61H248.62V-740h440v440h-30.77v-387.23L241.23-271.38Z" />
    </svg>
  )
}
