import type { SVGProps, JSX } from 'react'

export default function MobileArrowUpRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m386.91-341.76 152.61-152.61v111.09h65.5v-223.65H381.61v65.5H493.7l-152.61 152.6 45.82 47.07ZM194.02-34.02v-892.2h569.96v213.11h42.24v177.78h-42.24v501.31H194.02Z" />
    </svg>
  )
}
