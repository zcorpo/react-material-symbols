import type { SVGProps, JSX } from 'react'

export default function CreditScoreFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M598-80 428-250l43-43 127 127 240-240 42 44L598-80ZM140-501h680v-139H140v139ZM80-160v-640h800v299h-32L598-248 471-378 343-250l30 30v60H80Z" />
    </svg>
  )
}
