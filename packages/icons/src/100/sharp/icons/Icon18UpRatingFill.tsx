import type { SVGProps, JSX } from 'react'

export default function Icon18UpRatingFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M355-376h25v-208h-86v25h61v183Zm123 0h145v-208H478v208Zm25-27v-64h95v64h-95Zm0-90v-64h95v64h-95ZM172-172v-616h616v616H172Z" />
    </svg>
  )
}
