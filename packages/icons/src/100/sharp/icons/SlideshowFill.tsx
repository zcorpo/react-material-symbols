import type { SVGProps, JSX } from 'react'

export default function SlideshowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m402-351 200-129-200-129v258ZM172-172v-616h616v616H172Z" />
    </svg>
  )
}
