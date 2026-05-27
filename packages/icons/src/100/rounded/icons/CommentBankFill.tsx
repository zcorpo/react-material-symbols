import type { SVGProps } from 'react'

export default function CommentBankFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m244-292-66 66q-13 13-29.5 6.5T132-245v-529q0-23 15.5-38.5T186-828h588q23 0 38.5 15.5T828-774v428q0 23-15.5 38.5T774-292H244Zm309-514v209q0 8 7 12t14 0l43-24q4-3 9-3t10 3l42 24q7 4 14 0t7-12v-209H553Z" />
    </svg>
  )
}
