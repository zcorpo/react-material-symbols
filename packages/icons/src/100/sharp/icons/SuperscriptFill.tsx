import type { SVGProps, JSX } from 'react'

export default function SuperscriptFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M731-609v-82h100v-32H731v-25h125v82H756v32h100v25H731ZM294-212l162-249-148-227h29l139 214h-1l143-214h28L496-461l163 249h-28L475-449h1L322-212h-28Z" />
    </svg>
  )
}
