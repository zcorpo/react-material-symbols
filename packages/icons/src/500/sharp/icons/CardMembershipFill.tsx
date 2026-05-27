import type { SVGProps, JSX } from 'react'

export default function CardMembershipFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-886.22h812.2v612.2H630.78v202.15L480-148.02 329.46-71.87v-202.15H74.02v-612.2Zm68.13 443.7h675.7v-113.5h-675.7v113.5Z" />
    </svg>
  )
}
