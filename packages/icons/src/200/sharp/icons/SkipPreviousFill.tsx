import type { SVGProps, JSX } from 'react'

export default function SkipPreviousFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M269.23-295.38v-369.24H300v369.24h-30.77Zm421.54 0L420.15-480l270.62-184.62v369.24Z" />
    </svg>
  )
}
