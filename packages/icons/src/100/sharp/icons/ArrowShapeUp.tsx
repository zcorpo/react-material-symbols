import type { SVGProps, JSX } from 'react'

export default function ArrowShapeUp({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M348-172v-227H172l308-349 308 349H612v227H348Zm22-22h220v-227h148L480-715 222-421h148v227Zm110-227Z" />
    </svg>
  )
}
