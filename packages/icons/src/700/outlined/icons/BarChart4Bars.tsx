import type { SVGProps } from 'react'

export default function BarChart4Bars({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-105v-94h851v94H55Zm40-169v-272h134v272H95Zm211 0v-472h134v472H306Zm212 0v-352h135v352H518Zm213 0v-592h135v592H731Z" />
    </svg>
  )
}
