import type { SVGProps } from 'react'

export default function KeyboardTabRtl({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154-266h-22v-428h22v428Zm309-11L260-480l203-203 15 14-176 178h526v22H301l178 177-16 15Z" />
    </svg>
  )
}
