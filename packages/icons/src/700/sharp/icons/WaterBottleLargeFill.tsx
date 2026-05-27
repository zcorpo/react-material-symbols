import type { SVGProps } from 'react'

export default function WaterBottleLargeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M187-52v-264h80v-179h-80v-264h206v-60h-50v-94h274v94h-50v60h207v264h-80v179h80v264H187Z" />
    </svg>
  )
}
