import type { SVGProps } from 'react'

export default function SplitscreenLandscape({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M516.54-298.46h225v-363.08h-225v363.08Zm-298.08 0h225v-363.08h-225v363.08ZM100-180v-600h760v600H100Zm714.61-45.39v-509.22H145.39v509.22h669.22ZM145.39-734.61v509.22-509.22Z" />
    </svg>
  )
}
