import type { SVGProps } from 'react'

export default function RateReviewFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M260-420h78l234-234-77-78-235 234v78Zm246-207-37-15 15.49-38L521-664l-15 37Zm-30 207h224v-22H498l-22 22ZM132-180v-648h696v536H244L132-180Z" />
    </svg>
  )
}
