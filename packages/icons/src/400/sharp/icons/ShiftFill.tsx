import type { SVGProps } from 'react'

export default function ShiftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-120v-310H120l360-450 360 450H640v310H320Z" />
    </svg>
  )
}
