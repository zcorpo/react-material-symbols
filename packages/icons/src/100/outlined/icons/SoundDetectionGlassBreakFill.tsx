import type { SVGProps } from 'react'

export default function SoundDetectionGlassBreakFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-330v-458h616v133L540-378 380-538 172-330Zm0 158v-122l208-209 159 159 249-278v450H172Z" />
    </svg>
  )
}
