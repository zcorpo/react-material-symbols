import type { SVGProps } from 'react'

export default function VideoStableFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h800v640H80Zm611-60 98-374-519-146-98 374 519 146Z" />
    </svg>
  )
}
