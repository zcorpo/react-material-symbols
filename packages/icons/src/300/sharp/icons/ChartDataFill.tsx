import type { SVGProps } from 'react'

export default function ChartDataFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M296-344.39 418-466l80 80 159.31-158.69v87.38h45.38v-165.38H537.31v45.38h87.38L498-450.61l-80-80L264.39-376 296-344.39ZM140-140v-680h680v680H140Z" />
    </svg>
  )
}
