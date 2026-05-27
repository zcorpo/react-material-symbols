import type { SVGProps } from 'react'

export default function SubscriptFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M731-212v-82h100v-32H731v-25h125v82H756v32h100v25H731Zm-437-60 162-249-148-227h29l139 214h-1l143-214h28L496-521l163 249h-28L475-509h1L322-272h-28Z" />
    </svg>
  )
}
