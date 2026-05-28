import type { SVGProps, JSX } from 'react'

export default function CleaningServicesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-15v-528h248v-403h275v403h248v528H95Zm94-94h74v-161h94v161h76v-161h94v161h76v-161h95v161h73v-339H189v339Z" />
    </svg>
  )
}
