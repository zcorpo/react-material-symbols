import type { SVGProps } from 'react'

export default function TvGenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M165.93-114.5v-79.52H74.02v-611.96h812.2v611.96h-92.15v79.52h-30.18l-25.72-79.52H222.63l-26.52 79.52h-30.18Z" />
    </svg>
  )
}
