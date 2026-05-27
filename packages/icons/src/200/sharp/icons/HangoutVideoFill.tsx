import type { SVGProps, JSX } from 'react'

export default function HangoutVideoFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M279.85-346.31h266.61v-106.38l134.69 106.38v-267.38L546.46-507.31v-106.38H279.85v267.38ZM120-200v-560h720v560H120Z" />
    </svg>
  )
}
