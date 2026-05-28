import type { SVGProps, JSX } from 'react'

export default function SubtitlesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h760v600H100Zm151.54-173.46h346.15v-45.39H251.54v45.39Zm411.54 0h45.38v-45.39h-45.38v45.39ZM251.54-475.77h45.38v-45.38h-45.38v45.38Zm110.77 0h346.15v-45.38H362.31v45.38Z" />
    </svg>
  )
}
