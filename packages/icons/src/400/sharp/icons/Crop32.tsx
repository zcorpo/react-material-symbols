import type { SVGProps } from 'react'

export default function Crop32({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-240v-480h720v480H120Zm60-60h600v-360H180v360Zm0 0v-360 360Z" />
    </svg>
  )
}
