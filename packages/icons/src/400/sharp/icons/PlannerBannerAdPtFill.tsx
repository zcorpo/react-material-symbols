import type { SVGProps, JSX } from 'react'

export default function PlannerBannerAdPtFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-80v-800h640v800H160Zm124-157h397L553-408 448-272l-70-88-94 123Z" />
    </svg>
  )
}
