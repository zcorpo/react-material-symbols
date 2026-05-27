import type { SVGProps } from 'react'

export default function SplitscreenLandscapeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M516.54-298.46h225v-363.08h-225v363.08Zm-298.08 0h225v-363.08h-225v363.08ZM100-180v-600h760v600H100Z" />
    </svg>
  )
}
