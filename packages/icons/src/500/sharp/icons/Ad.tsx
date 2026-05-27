import type { SVGProps, JSX } from 'react'

export default function Ad({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-114.02v-732.2h732.2v732.2h-732.2ZM180-180h600v-504.2H180V-180Z" />
    </svg>
  )
}
