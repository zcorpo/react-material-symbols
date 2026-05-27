import type { SVGProps } from 'react'

export default function HorizontalAlignLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-212v-536h22v536h-22Zm293-107L304-480l162-162 16 16-135 135h441v22H347l134 134-16 16Z" />
    </svg>
  )
}
