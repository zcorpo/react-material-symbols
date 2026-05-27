import type { SVGProps } from 'react'

export default function ArrowsMoreUp({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M532-252v-360H172v-22h382v382h-22Zm154-153v-360H326v-22h382v382h-22Z" />
    </svg>
  )
}
