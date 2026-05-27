import type { SVGProps } from 'react'

export default function HorizontalAlignRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M766-212v-536h22v536h-22ZM494-318l-16-16 135-135H172v-22h441L479-625l16-16 161 161-162 162Z" />
    </svg>
  )
}
