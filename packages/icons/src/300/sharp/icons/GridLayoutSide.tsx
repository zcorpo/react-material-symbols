import type { SVGProps, JSX } from 'react'

export default function GridLayoutSide({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-140v-680h680v680H140Zm45.39-45.39h351.92v-589.22H185.39v589.22Zm589.22 0v-589.22H582.69v589.22h191.92Z" />
    </svg>
  )
}
