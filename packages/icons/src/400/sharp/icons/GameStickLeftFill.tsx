import type { SVGProps } from 'react'

export default function GameStickLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M674-356v196H285v-196q-92-31-148.5-85.51Q80-496.02 80-562.8 80-662 196.5-731 313-800 480-800t283.5 69.25Q880-661.51 880-563q0 67.24-56.5 122.12Q767-386 674-356ZM432-460h116v-30h-86v-175h-30v205Z" />
    </svg>
  )
}
