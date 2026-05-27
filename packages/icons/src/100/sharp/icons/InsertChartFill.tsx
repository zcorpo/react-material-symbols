import type { SVGProps, JSX } from 'react'

export default function InsertChartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M319-305h22v-227h-22v227Zm150 0h22v-350h-22v350Zm150 0h22v-105h-22v105ZM172-172v-616h616v616H172Z" />
    </svg>
  )
}
