import type { SVGProps, JSX } from 'react'

export default function PlannerBannerAdPt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-55v-851h691v851H135Zm85-85h520v-680H220v680Zm64-97h397L553-408 448-272l-70-88-94 123Zm-64 97v-680 680Z" />
    </svg>
  )
}
