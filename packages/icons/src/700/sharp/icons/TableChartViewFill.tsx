import type { SVGProps, JSX } from 'react'

export default function TableChartViewFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m289-62-67-67 294-294 140 140 215-214 66 66-281 282-140-140L289-62ZM149-95H55v-791h771v322H149v469Z" />
    </svg>
  )
}
