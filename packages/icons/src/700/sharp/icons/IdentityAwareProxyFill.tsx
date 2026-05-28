import type { SVGProps, JSX } from 'react'

export default function IdentityAwareProxyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M109-109v-82h742v82H109Zm0-660v-82h742v82H109Zm0 165v-82h82v82h-82Zm660 0v-82h82v82h-82ZM109-274v-82h82v82h-82Zm660 0v-82h82v82h-82Zm-450 0v-165H109v-82h210v-165h322v165h210v82H641v165H319Z" />
    </svg>
  )
}
