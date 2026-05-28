import type { SVGProps, JSX } from 'react'

export default function TvGen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M165.93-114.5v-79.52H74.02v-611.96h812.2v611.96h-92.15v79.52h-30.18l-25.72-79.52H222.63l-26.52 79.52h-30.18Zm-23.78-147.65h675.7v-475.46h-675.7v475.46ZM480-500Z" />
    </svg>
  )
}
