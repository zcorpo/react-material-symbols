import type { SVGProps } from 'react'

export default function Battery6BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M326-132v-648h90v-48h128v48h90v648H326Zm22-526h264v-101H348v101Z" />
    </svg>
  )
}
