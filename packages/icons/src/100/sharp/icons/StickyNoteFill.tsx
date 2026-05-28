import type { SVGProps, JSX } from 'react'

export default function StickyNoteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M618-172H172v-616h616v446L618-172Zm-15-22 163-163H603v163ZM469-346h22v-246h123v-22H346v22h123v246Z" />
    </svg>
  )
}
