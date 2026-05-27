import type { SVGProps } from 'react'

export default function HealthCrossFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M327-120v-207H120v-307h207v-206h307v206h206v307H634v207H327Z" />
    </svg>
  )
}
