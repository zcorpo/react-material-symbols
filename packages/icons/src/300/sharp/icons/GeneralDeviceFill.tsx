import type { SVGProps } from 'react'

export default function GeneralDeviceFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M335.39-238.08V-820h289.22v581.92H335.39Zm0 85.77v-45.38h289.22v45.38H335.39Z" />
    </svg>
  )
}
