import type { SVGProps, JSX } from 'react'

export default function CardMembership({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154-354h652v-109H154v109Zm226 184v-162H132v-496h696v496H580v162l-100-50-100 50ZM154-535h652v-271H154v271Zm0 181v-452 452Z" />
    </svg>
  )
}
