import type { SVGProps } from 'react'

export default function ShiftLockFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-220v-210H120l360-450 360 450H640v210H320ZM140-80v-60h680v60H140Z" />
    </svg>
  )
}
