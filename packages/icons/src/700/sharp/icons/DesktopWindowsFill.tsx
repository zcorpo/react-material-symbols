import type { SVGProps } from 'react'

export default function DesktopWindowsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M323-95v-94h86v-100H55v-576h851v576H551v100h86v94H323Z" />
    </svg>
  )
}
