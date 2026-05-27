import type { SVGProps } from 'react'

export default function SoundDetectionGlassBreak({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h771v771H95Zm94-676v375l190-190 158 157 234-261v-81H189Zm0 582h582v-359L542-291 380-453 189-261v72Z" />
    </svg>
  )
}
