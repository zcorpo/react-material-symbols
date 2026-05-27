import type { SVGProps, JSX } from 'react'

export default function HangoutVideoFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M290-353h253v-101.4L671-353v-254L543-505.6V-607H290v254ZM132-212v-536h696v536H132Z" />
    </svg>
  )
}
