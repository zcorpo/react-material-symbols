import type { SVGProps, JSX } from 'react'

export default function Looks3Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M354-277h252v-406H354v71h181v100h-98v60h98v104H354v71ZM95-95v-771h771v771H95Z" />
    </svg>
  )
}
