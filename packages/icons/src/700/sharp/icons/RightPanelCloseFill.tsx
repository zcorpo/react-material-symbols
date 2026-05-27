import type { SVGProps } from 'react'

export default function RightPanelCloseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m275-321 160-159-160-159v318Zm-86 132h356v-582H189v582ZM95-95v-771h771v771H95Z" />
    </svg>
  )
}
