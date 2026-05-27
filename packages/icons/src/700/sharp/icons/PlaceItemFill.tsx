import type { SVGProps } from 'react'

export default function PlaceItemFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-86v-623h293v95H174v434h612v-434H587v-95h294v623H80Zm400-196L277-485l67-67 89 90v-498h94v498l89-90 67 67-203 203Z" />
    </svg>
  )
}
