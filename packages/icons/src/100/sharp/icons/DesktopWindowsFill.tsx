import type { SVGProps } from 'react'

export default function DesktopWindowsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M376-172v-22h82v-86H132v-508h696v508H502v86h82v22H376Z" />
    </svg>
  )
}
