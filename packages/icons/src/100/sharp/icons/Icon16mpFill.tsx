import type { SVGProps, JSX } from 'react'

export default function Icon16mpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M355-519h25v-208h-86v25h61v183Zm143 0h145v-117H523v-66h120v-25H498v208Zm25-26v-65h95v65h-95ZM254-233h25v-183h76v122h25v-122h78v183h25v-208H254v208Zm307 0h25v-61h120v-147H561v208Zm25-86v-97h95v97h-95ZM172-172v-616h616v616H172Z" />
    </svg>
  )
}
