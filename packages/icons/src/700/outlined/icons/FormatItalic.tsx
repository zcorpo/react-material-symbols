import type { SVGProps } from 'react'

export default function FormatItalic({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M205-174v-115h139l132-388H324v-114h414v114H600L468-289h152v115H205Z" />
    </svg>
  )
}
