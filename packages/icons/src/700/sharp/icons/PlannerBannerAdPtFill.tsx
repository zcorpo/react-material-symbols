import type { SVGProps } from 'react'

export default function PlannerBannerAdPtFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-55v-851h691v851H135Zm149-182h397L553-408 448-272l-70-88-94 123Z" />
    </svg>
  )
}
