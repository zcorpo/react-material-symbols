import type { SVGProps } from 'react'

export default function SelectCheckBoxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h624l-22 22H194v572h572v-326l22-22v370H172Zm289-147L293-487l16-16 153 153 352-352 14 16-367 367Z" />
    </svg>
  )
}
