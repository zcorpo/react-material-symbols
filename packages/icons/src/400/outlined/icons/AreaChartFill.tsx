import type { SVGProps, JSX } from 'react'

export default function AreaChartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M840-270 472-558 312-337 120-491v-189l160 120 200-280 200 160h160v410ZM120-160v-254l204 163 160-221 356 278v34H120Z" />
    </svg>
  )
}
