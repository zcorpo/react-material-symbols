import type { SVGProps, JSX } from 'react'

export default function ShelfPositionFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-175h616v175H172Zm465-197v-419h151v419H637Zm-465 0v-419h151v419H172Zm173 0v-419h270v419H345Z" />
    </svg>
  )
}
