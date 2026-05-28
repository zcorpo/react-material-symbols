import type { SVGProps, JSX } from 'react'

export default function OverviewKeyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-252v-456h456v456H80Zm606 0v-456h22v456h-22Zm172 0v-456h22v456h-22Z" />
    </svg>
  )
}
