import type { SVGProps, JSX } from 'react'

export default function Tooltip2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M266-413h266v-22H266v22Zm0-123h428v-22H266v22Zm0-123h428v-22H266v22Zm214 527-86-133H132v-563h696v563H566l-86 133Zm0-40 74-115h252v-519H154v519h252l74 115Zm0-375Z" />
    </svg>
  )
}
