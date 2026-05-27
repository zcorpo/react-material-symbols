import type { SVGProps, JSX } from 'react'

export default function ProcessChartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m120-227-53-27 243-479 53 27-243 479Zm264 0-53-27 243-479 53 27-243 479Zm264 0-53-27 243-479 53 27-243 479Z" />
    </svg>
  )
}
