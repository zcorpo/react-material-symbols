import type { SVGProps } from 'react'

export default function FloorLampFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M451-200v-320H187l111-360h366l111 360H511v320h-60ZM331-80v-60h300v60H331Z" />
    </svg>
  )
}
