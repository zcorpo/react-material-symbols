import type { SVGProps, JSX } from 'react'

export default function ChartDataFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m296-361 122-121 80 80 171-171v104h22v-142H549v22h104L498-434l-80-80-137 138 15 15ZM172-172v-616h616v616H172Z" />
    </svg>
  )
}
