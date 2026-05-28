import type { SVGProps, JSX } from 'react'

export default function Icon14mpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M355-519h25v-208h-86v25h61v183Zm232 0h25v-61h54v-25h-54v-122h-25v122h-79v-122h-25v147h104v61ZM254-233h25v-183h76v122h25v-122h78v183h25v-208H254v208Zm307 0h25v-61h120v-147H561v208Zm25-86v-97h95v97h-95ZM172-172v-616h616v616H172Z" />
    </svg>
  )
}
