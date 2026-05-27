import type { SVGProps } from 'react'

export default function ArrowOutward({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m242-246-42-42 412-412H234v-60h480v480h-60v-378L242-246Z" />
    </svg>
  )
}
