import type { SVGProps, JSX } from 'react'

export default function PanZoom({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-276h94v115l131-131 67 67-131 131h115v94H95Zm546-479-67-67 130-130H589v-95h277v277h-95v-115L641-574Z" />
    </svg>
  )
}
