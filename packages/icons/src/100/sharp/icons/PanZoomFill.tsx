import type { SVGProps, JSX } from 'react'

export default function PanZoomFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-185h22v147l157-157 16 16-157 157h147v22H172Zm437-421-16-16 157-157H603v-22h185v185h-22v-147L609-593Z" />
    </svg>
  )
}
