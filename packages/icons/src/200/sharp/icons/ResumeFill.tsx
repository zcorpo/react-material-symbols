import type { SVGProps } from 'react'

export default function ResumeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M289.23-295.38v-369.24H320v369.24h-30.77Zm141.69 0L732.85-480 430.92-664.62v369.24Z" />
    </svg>
  )
}
