import type { SVGProps, JSX } from 'react'

export default function Looks6({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M425-518v-94h138v-71H354v406h252v-241H425Zm0 72h110v98H425v-98ZM95-95v-771h771v771H95Zm94-94h582v-582H189v582Zm0 0v-582 582Z" />
    </svg>
  )
}
