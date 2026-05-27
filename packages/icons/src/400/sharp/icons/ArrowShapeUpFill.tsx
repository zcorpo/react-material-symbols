import type { SVGProps } from 'react'

export default function ArrowShapeUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-120v-230H120l360-450 360 450H640v230H320Z" />
    </svg>
  )
}
