import type { SVGProps, JSX } from 'react'

export default function Battery4BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M348-484h264v-275H348v275Zm-22 352v-648h90v-48h128v48h90v648H326Z" />
    </svg>
  )
}
